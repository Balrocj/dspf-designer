import * as vscode from 'vscode';
import * as path from 'path';

/**
 * Provider for DSPF files with visual designer interface
 */
	export class DspfEditorProvider implements vscode.CustomTextEditorProvider {
			private readonly queuedOpenModes = new Map<string, { mode: 'designer' | 'preview'; recordName?: string }>();
			private readonly resolvedOpenModes = new Map<string, 'designer' | 'preview'>();

	constructor(private readonly context: vscode.ExtensionContext) { }

		public queueOpenMode(uri: vscode.Uri, mode: 'designer' | 'preview', recordName?: string): void {
			this.queuedOpenModes.set(uri.toString(), { mode, recordName });
		}

		public getOpenMode(uri: vscode.Uri): 'designer' | 'preview' {
			return this.resolvedOpenModes.get(uri.toString()) || 'designer';
		}

		private consumeQueuedOpenMode(uri: vscode.Uri): { mode: 'designer' | 'preview'; recordName?: string } {
			const key = uri.toString();
			const queued = this.queuedOpenModes.get(key) || { mode: 'designer' as const };
			this.queuedOpenModes.delete(key);
			return queued;
		}

	/**
	 * Check if document is editable (not read-only)
	 */
	private async isDocumentEditable(document: vscode.TextDocument): Promise<boolean> {
		// Log the URI for debugging
		console.log('🔍 Checking editability for URI:', document.uri.toString());
		console.log('   Scheme:', document.uri.scheme);
		console.log('   Path:', document.uri.path);
		
		// Check if document is closed or disposed
		if (document.isClosed) {
			console.log('   ❌ Document is closed');
			return false;
		}
		
		// Check URI scheme - certain schemes are always read-only
		const readOnlySchemes = ['git', 'output', 'vscode', 'readonly'];
		if (readOnlySchemes.includes(document.uri.scheme)) {
			console.log('   ❌ Read-only scheme detected');
			return false;
		}
		
		// Check if the URI contains readonly parameter (Code for IBM i)
		const uriString = document.uri.toString();
		console.log('   🔍 Full URI string:', uriString);
		console.log('   🔍 Contains readonly%3Dtrue?', uriString.includes('readonly%3Dtrue'));
		console.log('   🔍 Contains readonly=true?', uriString.includes('readonly=true'));
		
		if (uriString.includes('readonly%3Dtrue') || uriString.includes('readonly=true')) {
			console.log('   ❌ Read-only parameter detected in URI');
			return false;
		}
		
		// For file scheme, check if the file is actually writable
		if (document.uri.scheme === 'file') {
			try {
				// Try to get file stats to check permissions
				const fs = require('fs');
				// Check if file is writable (using fs.constants.W_OK)
				try {
					fs.accessSync(document.uri.fsPath, fs.constants.W_OK);
					console.log('   ✅ File is writable');
					return true;
				} catch {
					console.log('   ❌ File is not writable');
					return false;
				}
			} catch {
				// If we can't check, assume it's editable
				console.log('   ⚠️ Cannot check file permissions, assuming editable');
				return true;
			}
		}
		
		// For Code for IBM i schemes (member, streamfile) without readonly flag
		console.log('   ✅ Editable for scheme:', document.uri.scheme);
		return true;
	}

	/**
	 * Check if document is read-only
	 */
	private async isDocumentReadOnly(document: vscode.TextDocument): Promise<boolean> {
		const isEditable = await this.isDocumentEditable(document);
		return !isEditable;
	}

	private getSaveMode(): 'manual' | 'automatic' {
		const value = vscode.workspace.getConfiguration('dspfDesigner').get<string>('saveMode', 'automatic');
		return value === 'automatic' ? 'automatic' : 'manual';
	}

	private getOpenBehavior(): 'currentEditor' | 'newTab' {
		const value = vscode.workspace.getConfiguration('dspfDesigner').get<string>('openBehavior', 'newTab');
		return value === 'newTab' ? 'newTab' : 'currentEditor';
	}
	
	/**
	 * Resolve a custom editor for DSPF files
	 */
	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		webviewPanel: vscode.WebviewPanel,
		token: vscode.CancellationToken
	): Promise<void> {
		
		// Setup initial content for the webview
		webviewPanel.webview.options = {
			enableScripts: true,
		};

		// Parse the DSPF file to find all records
		const records = this.parseDspfRecords(document.getText());
		const openRequest = this.consumeQueuedOpenMode(document.uri);
		const forcePreviewMode = openRequest.mode === 'preview';
		const zoomStateKey = `dspfDesigner.zoom.${document.uri.toString()}`;
		let savedZoom = this.context.workspaceState.get<number>(zoomStateKey);
		this.resolvedOpenModes.set(document.uri.toString(), forcePreviewMode ? 'preview' : 'designer');
		const saveMode = this.getSaveMode();
		const openBehavior = this.getOpenBehavior();
		let currentRecordContext: string | undefined = undefined;
		let currentReadOnlyMode: boolean = false; // Track if user chose Display mode
		
		// Check if document is read-only
		const isReadOnly = await this.isDocumentReadOnly(document);
		
		if (forcePreviewMode) {
			const requestedRecordName = openRequest.recordName?.toUpperCase();
			const matchedRecord = requestedRecordName
				? records.find(record => record.name.toUpperCase() === requestedRecordName)
				: undefined;
			const previewRecord = matchedRecord?.name || (records.length > 0 ? records[0].name : 'MAIN');
			currentRecordContext = previewRecord;
			currentReadOnlyMode = true;
			webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, previewRecord, saveMode, 'preview', openBehavior, savedZoom);
		} else if (records.length !== 1) {
			// Show record selector when there are no records or multiple records.
			webviewPanel.webview.html = this.getRecordSelectorHtml(webviewPanel.webview, records, isReadOnly, saveMode);
		} else {
			// Show designer directly when the DSPF contains exactly one record.
			const recordName = records[0].name;
			currentRecordContext = recordName;
			webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, recordName, saveMode, 'designer', openBehavior, savedZoom);
		}

		// Handle messages from the webview
		// Handle messages from the webview
		let suppressedSourceEchoContent: string | null = null;
		let suppressSourceEchoUntil = 0;
		webviewPanel.onDidDispose(() => {
			this.resolvedOpenModes.delete(document.uri.toString());
		});
		const messageSubscription = webviewPanel.webview.onDidReceiveMessage(async (message) => {
			console.log('📨 Received message:', message);
			switch (message.type) {
				case 'update':
					// Update the current record context if provided
					if (message.currentRecord) {
						currentRecordContext = message.currentRecord;
					}
					try {
						if (message.origin === 'source-editor') {
							suppressedSourceEchoContent = message.content;
							suppressSourceEchoUntil = Date.now() + 1500;
						}
						await this.updateTextDocument(document, message.content);
						// Avoid echoing full document on every Source keystroke (it can reset editor history/feel).
						if (message.origin !== 'source-editor') {
							// Send back updated document with preserved record context
							const isEditable = await this.isDocumentEditable(document);
							const effectiveReadOnly = currentReadOnlyMode || !isEditable;
							const recordsUpdate = this.parseDspfRecords(document.getText());
							console.log('📤 Sending isReadOnly:', effectiveReadOnly, '(isEditable:', isEditable, 'currentReadOnlyMode:', currentReadOnlyMode, ')');
							webviewPanel.webview.postMessage({
								type: 'documentContent',
								content: document.getText(),
								currentRecord: currentRecordContext, // Preserve the current record context
								isReadOnly: effectiveReadOnly,
								records: recordsUpdate
							});
						}
						// Send success notification
						webviewPanel.webview.postMessage({
							type: 'saveSuccess'
						});
					} catch (error) {
						// Send error notification
						webviewPanel.webview.postMessage({
							type: 'saveError',
							error: error instanceof Error ? error.message : 'Unknown error'
						});
					}
					break;
				case 'getDocument':
					const isEditableGet = await this.isDocumentEditable(document);
					const effectiveReadOnlyGet = currentReadOnlyMode || !isEditableGet;
					const recordsGet = this.parseDspfRecords(document.getText());
					console.log('📤 Sending isReadOnly:', effectiveReadOnlyGet, '(isEditable:', isEditableGet, 'currentReadOnlyMode:', currentReadOnlyMode, ')');
					webviewPanel.webview.postMessage({
						type: 'documentContent',
						content: document.getText(),
						currentRecord: currentRecordContext, // Preserve the current record context
						isReadOnly: effectiveReadOnlyGet,
						records: recordsGet
					});
					break;
				case 'selectRecord':
					console.log('🎯 Switching to designer for record:', message.recordName);
					// Update the current record context and reset read-only mode (selectRecord is for editing)
					currentRecordContext = message.recordName;
					currentReadOnlyMode = false; // Reset when explicitly selecting a record to edit
					// Switch to designer view for selected record
					webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, message.recordName, saveMode, 'designer', openBehavior, savedZoom);
					// Send document content and current record to the designer
					setTimeout(async () => {
						const isEditableSelect = await this.isDocumentEditable(document);
						const recordsSelect = this.parseDspfRecords(document.getText());
						console.log('📤 Sending isReadOnly:', !isEditableSelect, '(isEditable:', isEditableSelect, ')');
						webviewPanel.webview.postMessage({
							type: 'documentContent',
							content: document.getText(),
							currentRecord: message.recordName,
							isReadOnly: !isEditableSelect,
							records: recordsSelect
						});
					}, 100);
					break;
				case 'openRecord':
					console.log('🎯 Opening record:', message.recordName, 'readOnly:', message.readOnly);
					// Update the current record context and read-only mode
					currentRecordContext = message.recordName;
					currentReadOnlyMode = message.readOnly; // Save the user's choice
					// Switch to designer view for selected record
					webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, message.recordName, saveMode, 'designer', openBehavior, savedZoom);
					// Send document content with forced read-only mode
					setTimeout(() => {
						const recordsOpen = this.parseDspfRecords(document.getText());
						console.log('📤 Sending isReadOnly:', message.readOnly);
						webviewPanel.webview.postMessage({
							type: 'documentContent',
							content: document.getText(),
							currentRecord: message.recordName,
							isReadOnly: message.readOnly,
							records: recordsOpen
						});
					}, 100);
					break;
				case 'backToRecordList':
					console.log('🔙 Going back to record list');
					// Go back to record selector
					const updatedRecords = this.parseDspfRecords(document.getText());
					const isReadOnlyBack = await this.isDocumentReadOnly(document);
					webviewPanel.webview.html = this.getRecordSelectorHtml(webviewPanel.webview, updatedRecords, isReadOnlyBack, saveMode);
					break;
				case 'exitDesigner':
					console.log('🚪 Exiting Designer and returning to text editor');
					await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
					await vscode.commands.executeCommand('vscode.open', document.uri);
					break;
				case 'zoomChanged':
					if (typeof message.zoom === 'number' && Number.isFinite(message.zoom)) {
						savedZoom = Math.max(0.5, Math.min(2, message.zoom));
						await this.context.workspaceState.update(zoomStateKey, savedZoom);
					}
					break;
				case 'openExtensionSettings':
					await vscode.commands.executeCommand('workbench.action.openSettings', '@ext:Balrocj.dspf-designer');
					break;
				case 'addField':
					await this.addField(document, message.field);
					break;
				case 'updateField':
					await this.updateField(document, message.field, message.oldField);
					break;
				case 'deleteField':
					await this.deleteField(document, message.field);
					break;
				case 'deleteRecord':
					await this.deleteRecord(document, message.recordName, webviewPanel);
					break;
				case 'createRecord':
					await this.createRecord(document, message.recordName, message.recordType, message.controlRecordName, webviewPanel, saveMode, openBehavior, savedZoom, (recordName) => {
						currentRecordContext = recordName;
						currentReadOnlyMode = false;
					});
					break;
				case 'error':
					// Show error message to user
					vscode.window.showErrorMessage(message.message);
					break;
				case 'applyChangesSuccess':
					// Show success message for Apply Changes button
					vscode.window.showInformationMessage(message.message);
					break;
				case 'applyChangesError':
					// Show error message for Apply Changes button
					vscode.window.showErrorMessage(message.message);
					break;
				case 'navigateToRecord':
					// Navigate to a specific record (no HTML reload needed, just update content)
					console.log('🎯 Navigating to record:', message.recordName, 'preserving view:', message.preserveView, 'readOnly mode:', currentReadOnlyMode);
					currentRecordContext = message.recordName;
					// Don't reload HTML - just send updated content to preserve view state and readOnly mode
					setTimeout(async () => {
						// PRESERVE currentReadOnlyMode if it was set via Display button
						// (don't let file permissions override user's explicit Display choice)
						const isEditableNav = await this.isDocumentEditable(document);
						const effectiveReadOnly = currentReadOnlyMode || !isEditableNav;
						
						const records = this.parseDspfRecords(document.getText());
						webviewPanel.webview.postMessage({
							type: 'documentContent',
							content: document.getText(),
							currentRecord: message.recordName,
							isReadOnly: effectiveReadOnly,
							records: records,
							preserveView: message.preserveView // Send back the view to restore
						});
					}, 100);
					break;
			}
		});

		// Send initial document content with current record context
		setTimeout(async () => {
			const isEditable = await this.isDocumentEditable(document);
			const effectiveReadOnly = currentReadOnlyMode || !isEditable;
			const records = this.parseDspfRecords(document.getText());
			console.log('📤 Sending isReadOnly:', effectiveReadOnly, '(isEditable:', isEditable, 'currentReadOnlyMode:', currentReadOnlyMode, ')');
			webviewPanel.webview.postMessage({
				type: 'documentContent',
				content: document.getText(),
				currentRecord: currentRecordContext,
				isReadOnly: effectiveReadOnly,
				records: records
			});
		}, 100);

		// Listen for document changes
		const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(async e => {
			if (e.document.uri.toString() === document.uri.toString()) {
				const now = Date.now();
				const docText = document.getText();
				if (suppressedSourceEchoContent && now <= suppressSourceEchoUntil && docText === suppressedSourceEchoContent) {
					return;
				}

				if (now > suppressSourceEchoUntil) {
					suppressedSourceEchoContent = null;
				}

				// PRESERVE currentReadOnlyMode if it was set via Display button
				const isEditableChange = await this.isDocumentEditable(e.document);
				const effectiveReadOnlyForChange = currentReadOnlyMode || !isEditableChange;
				const recordsChange = this.parseDspfRecords(document.getText());
				console.log('📤 Sending isReadOnly:', effectiveReadOnlyForChange, '(isEditable:', isEditableChange, 'currentReadOnlyMode:', currentReadOnlyMode, ')');
				webviewPanel.webview.postMessage({
					type: 'documentContent',
					content: document.getText(),
					currentRecord: currentRecordContext, // Preserve record context on external changes
					isReadOnly: effectiveReadOnlyForChange,
					records: recordsChange
				});
			}
		});

		// Cleanup - dispose ALL subscriptions to prevent memory leaks
		webviewPanel.onDidDispose(() => {
			messageSubscription.dispose();
			changeDocumentSubscription.dispose();
		});
	}

	/**
	 * Get the static HTML for the webview
	 */
	private getHtmlForWebview(webview: vscode.Webview, recordName: string = 'MAIN', saveMode: 'manual' | 'automatic' = 'automatic', initialView: 'designer' | 'preview' = 'designer', openBehavior: 'currentEditor' | 'newTab' = 'newTab', zoom?: number): string {
		// Add timestamp to force cache refresh
		const timestamp = Date.now();
		const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'dspfDesigner.css')).toString() + '?v=' + timestamp;
		
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'dspfDesigner.bundle.js')).toString() + '?v=' + timestamp;

		const fontUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', '3270-Regular.woff'));

		const nonce = this.getNonce();
		const showBackButton = initialView !== 'preview';

		return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; font-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="${styleUri}" rel="stylesheet">
	<title>DSPF Designer</title>
	<style>
		@font-face {
			font-family: '3270';
			src: url('${fontUri}') format('woff');
			font-weight: normal;
			font-style: normal;
		}
	</style>
	<style>
		#toolbar {
			display: flex;
			align-items: center;
			gap: 12px;
		}
		.toolbar-left {
			display: flex;
			align-items: center;
			gap: 15px;
		}
		.toolbar-center {
			display: flex;
			align-items: center;
			gap: 10px;
			margin-left: auto;
			margin-right: 6px;
		}
		#backBtn {
			background: var(--vscode-button-secondaryBackground);
			color: var(--vscode-button-secondaryForeground);
			border: none;
			padding: 8px 12px;
			border-radius: 4px;
			cursor: pointer;
			font-size: 0.9em;
		}
		#backBtn:hover {
			background: var(--vscode-button-secondaryHoverBackground);
		}
		#prevRecordBtn, #nextRecordBtn {
			background: var(--vscode-button-background);
			color: var(--vscode-button-foreground);
			border: none;
			padding: 6px 12px;
			border-radius: 4px;
			cursor: pointer;
			font-size: 0.85em;
		}
		#prevRecordBtn:hover, #nextRecordBtn:hover {
			background: var(--vscode-button-hoverBackground);
		}
		#prevRecordBtn:disabled, #nextRecordBtn:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		#undoBtn:disabled, #redoBtn:disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}
	</style>
</head>
<body>
	<div id="app">
		<div id="toolbar">
			<div class="toolbar-left">
				<button id="backBtn" style="display: ${showBackButton ? 'inline-block' : 'none'}">← Back to Records</button>
				<h2>DSPF Designer - ${recordName}</h2>
			</div>
			<div class="toolbar-center">
				<button id="prevRecordBtn" style="display: inline-block" title="Go to previous record">← Previous Record</button>
				<button id="nextRecordBtn" style="display: inline-block" title="Go to next record">Next Record →</button>
			</div>
			<div class="toolbar-buttons">
				<button id="saveBtn">Save</button>
				<button id="undoBtn" title="Undo (Ctrl+Z)">Undo</button>
				<button id="redoBtn" title="Redo (Ctrl+Y)">Redo</button>
				<span id="autoSaveIndicator" style="display: none; padding: 6px 10px; border-radius: 999px; background: color-mix(in srgb, var(--vscode-button-background) 18%, transparent); border: 1px solid var(--vscode-panel-border); color: var(--vscode-descriptionForeground); font-size: 0.85em; white-space: nowrap;">Auto-save on</span>
				<div class="zoom-controls" aria-label="Zoom controls">
					<button id="zoomOutBtn" class="zoom-button" title="Zoom out">−</button>
					<span id="zoomLabel" class="zoom-label">100%</span>
					<button id="zoomInBtn" class="zoom-button" title="Zoom in">+</button>
					<button id="zoomResetBtn" class="zoom-button zoom-reset" title="Reset zoom">Reset</button>
				</div>
				<div class="view-tabs">
					<button id="designerTab" class="tab-button active">Designer</button>
					<button id="previewTab" class="tab-button">Preview</button>
					<button id="sourceTab" class="tab-button">Source</button>
				</div>
			</div>
		</div>
		
		<div id="main-container">
			<div id="views-container">
				<div id="zoom-container" class="zoom-container">
			<!-- Designer View -->
			<div id="designer-view" class="view active">
				<!-- Toolbox Panel (Right) -->
				<div id="toolbox-panel" class="panel">
					<h3>Toolbox</h3>
					<div class="tool-category">
						<h4>Fields/Vars</h4>
						<div class="tool-item" draggable="true" data-type="text">
							<div class="tool-icon">📝</div>
							<span>Text</span>
						</div>
					<div class="tool-item" draggable="true" data-type="number">
						<div class="tool-icon">🔢</div>
						<span>Number</span>
					</div>
					<div class="tool-item" draggable="true" data-type="constant">
						<div class="tool-icon">🔤</div>
						<span>Label</span>
					</div>
					<div class="tool-item" draggable="true" data-type="field-date">
						<div class="tool-icon">📆</div>
						<span>Date (L)</span>
					</div>
					<div class="tool-item" draggable="true" data-type="field-time">
						<div class="tool-icon">⏱️</div>
						<span>Time (T)</span>
					</div>
					<div class="tool-item" draggable="true" data-type="field-timestamp">
						<div class="tool-icon">🕰️</div>
						<span>Timestamp (Z)</span>
					</div>
				</div>
				<div class="tool-category">
					<h4>Specials Constants</h4>
					<div class="tool-item" draggable="true" data-type="keyword-date">
						<div class="tool-icon">📅</div>
						<span>DATE</span>
					</div>
					<div class="tool-item" draggable="true" data-type="keyword-time">
						<div class="tool-icon">🕐</div>
						<span>TIME</span>
					</div>
					<div class="tool-item" draggable="true" data-type="keyword-sysname">
						<div class="tool-icon">💻</div>
						<span>SYSNAME</span>
					</div>
					<div class="tool-item" draggable="true" data-type="keyword-user">
						<div class="tool-icon">👤</div>
						<span>USER</span>
					</div>
				</div>

				</div>

			<!-- Design Canvas (Center) -->
			<div id="design-canvas" class="panel">
				<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
					<h3 style="margin: 0;">Design Canvas</h3>
					
					<!-- Display Size Selection -->
					<div id="display-size-selector" style="display: flex; align-items: center; gap: 15px; padding: 6px 12px; background-color: var(--vscode-editor-background); border: 1px solid var(--vscode-panel-border); border-radius: 4px;">
						<label style="color: var(--vscode-foreground); font-weight: 600; font-size: 12px;">Display Size:</label>
						<label style="cursor: pointer; color: var(--vscode-foreground); font-size: 12px; display: flex; align-items: center; gap: 5px;">
							<input type="radio" name="displaySize" value="DS3" checked style="cursor: pointer;" />
							24 x 80 (*DS3)
						</label>
						<label style="cursor: pointer; color: var(--vscode-foreground); font-size: 12px; display: flex; align-items: center; gap: 5px;">
							<input type="radio" name="displaySize" value="DS4" style="cursor: pointer;" />
							27 x 132 (*DS4)
						</label>
					</div>
				</div>

				<div id="designer-hidden-fields" style="display: none; margin-bottom: 10px;"></div>
				
				<!-- Screen with External Rulers -->
				<div id="screen-with-rulers">
					<!-- Rulers as external frame -->
					<div id="horizontal-ruler" class="ruler horizontal-ruler"></div>
					<div id="vertical-ruler" class="ruler vertical-ruler"></div>
					<div id="ruler-corner" class="ruler-corner"></div>
					
					<!-- Actual screen area with fields -->
					<div id="fields-container">
						<!-- Fields will be rendered here -->
					</div>
				</div>
			</div>
			</div>

			<!-- Preview View -->
			<div id="preview-view" class="view">
				<div id="preview-toolbar">
					<!-- Indicator simulation panel rendered here by JS -->
				</div>
				<div id="preview-container">
					<!-- Preview content will be generated here -->
				</div>
			</div>
			<!-- Source View -->
			<div id="source-view" class="view">
				<div id="source-container">
					<div id="source-editor-wrapper">
						<!-- Column ruler header (sticky) -->
						<div id="source-column-ruler">
							<div class="ruler-line-number-space"></div>
							<div class="ruler-content">
								<div class="ruler-row ruler-main"></div>
							</div>
						</div>
						<div id="source-editor" aria-label="DDS source editor"></div>
					</div>
				</div>
			</div>
		</div>
	</div> <!-- End views-container -->

		<!-- Properties Panel (Shared across views) -->
		<div id="properties-panel" class="panel">
			<h3>Properties</h3>
			<div id="field-properties">
				<p>Select a field to edit properties</p>
				<!-- Properties will be populated by JavaScript -->
				<div id="property-inputs" style="display: none;">
					<div class="property-group">
						<label>Name:</label>
						<input type="text" id="field-name" />
					</div>
					<div class="property-group">
						<label>Length:</label>
						<input type="number" id="field-length" min="1" max="99" />
					</div>
					<div class="property-group">
						<label>Type:</label>
						<select id="field-usage">
							<option value="O">Entrada (O)</option>
							<option value="I">Salida (I)</option>
							<option value="B">Ambos (B)</option>
						</select>
					</div>
					<div class="property-group">
						<label>Row:</label>
						<input type="number" id="field-row" min="1" max="24" />
					</div>
					<div class="property-group">
						<label>Column:</label>
						<input type="number" id="field-col" min="1" max="80" />
					</div>
					<div class="property-group">
						<button id="update-field-btn">Update Field</button>
						<button id="delete-field-btn">Delete Field</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script nonce="${nonce}">
		window.dspfDesignerConfig = {
			saveMode: '${saveMode}',
			initialView: '${initialView}',
			openBehavior: '${openBehavior}',
			zoom: ${typeof zoom === 'number' ? zoom : 'null'}
		};

		// Setup event listeners when DOM is ready
		document.addEventListener('DOMContentLoaded', function() {
			console.log('🔙 Setting up back button listener');
			const backBtn = document.getElementById('backBtn');
			if (backBtn) {
				backBtn.addEventListener('click', function() {
					console.log('🔙 Back button clicked');
					// Use existing vscode API instance from main script
					if (window.vscodeApi) {
						window.vscodeApi.postMessage({
							type: 'backToRecordList'
						});
					} else {
						console.error('❌ VS Code API not available');
					}
				});
				console.log('✅ Back button listener added');
			} else {
				console.log('⚠️ Back button not found');
			}
		});
	</script>
	<script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
	}

	/**
	 * Update the text document with new content
	 */
	private async updateTextDocument(document: vscode.TextDocument, content: string): Promise<void> {
		const edit = new vscode.WorkspaceEdit();
		
		// Replace entire document content
		edit.replace(
			document.uri,
			new vscode.Range(0, 0, document.lineCount, 0),
			content
		);

		await vscode.workspace.applyEdit(edit);
		
		// Save the document to disk
		await document.save();
		console.log('💾 Document saved to disk');
	}

	/**
	 * Add a new field to the DSPF document
	 */
	private async addField(document: vscode.TextDocument, field: any): Promise<void> {
		const lines = document.getText().split('\n');
		
		// Find the best place to insert the field (after the record format)
		let insertIndex = lines.length;
		for (let i = lines.length - 1; i >= 0; i--) {
			if (lines[i].trim().startsWith('A          R ')) {
				insertIndex = i + 1;
				break;
			}
		}

		// Generate DDS line for the field
		const ddsLine = this.generateDDSLine(field);
		lines.splice(insertIndex, 0, ddsLine);

		const edit = new vscode.WorkspaceEdit();
		edit.replace(
			document.uri,
			new vscode.Range(0, 0, document.lineCount, 0),
			lines.join('\n')
		);

		await vscode.workspace.applyEdit(edit);
	}

	/**
	 * Update an existing field in the DSPF document
	 */
	private async updateField(document: vscode.TextDocument, newField: any, oldField: any): Promise<void> {
		// Implementation for updating existing fields
		// This would involve parsing the DDS and replacing the specific field line
	}

	/**
	 * Delete a field from the DSPF document
	 */
	private async deleteField(document: vscode.TextDocument, field: any): Promise<void> {
		// Implementation for deleting fields
		// This would involve finding and removing the DDS line for the field
	}

	/**
	 * Delete a complete record from the DSPF file
	 */
	private async deleteRecord(document: vscode.TextDocument, recordName: string, webviewPanel: vscode.WebviewPanel): Promise<void> {
		console.log('🗑️ Deleting record:', recordName);
		
		// Parse the document to find the record
		const records = this.parseDspfRecords(document.getText());
		const recordToDelete = records.find(r => r.name === recordName);
		
		if (!recordToDelete) {
			vscode.window.showErrorMessage(`Record "${recordName}" not found.`);
			return;
		}
		
		// Get the document lines
		const lines = document.getText().split('\n');
		
		// Delete lines from lineStart to lineEnd (inclusive)
		const newLines = [
			...lines.slice(0, recordToDelete.lineStart),
			...lines.slice(recordToDelete.lineEnd + 1)
		];
		
		// Create the edit
		const edit = new vscode.WorkspaceEdit();
		const fullRange = new vscode.Range(
			document.positionAt(0),
			document.positionAt(document.getText().length)
		);
		edit.replace(document.uri, fullRange, newLines.join('\n'));
		
		// Apply the edit
		const success = await vscode.workspace.applyEdit(edit);
		
		if (success) {
			console.log('✅ Record deleted successfully');
			vscode.window.showInformationMessage(`Record "${recordName}" has been deleted.`);
			
			// Auto-save the document (confirmed delete should persist to disk)
			try {
				vscode.window.showInformationMessage('Auto-saving document after confirmed delete...');
				await document.save();
				console.log('💾 Document saved to disk after record deletion');
			} catch (err) {
				console.error('❌ Failed to save document after delete', err);
				const errMsg = err && (err as any).message ? (err as any).message : String(err);
				vscode.window.showErrorMessage(`Record deleted, but failed to save file: ${errMsg}`);
			}

			// Re-open the document to ensure we refresh from the persisted content
			const savedDoc = await vscode.workspace.openTextDocument(document.uri);

			// Refresh the record selector using the saved document content
			const updatedRecords = this.parseDspfRecords(savedDoc.getText());
			const isReadOnly = await this.isDocumentReadOnly(savedDoc);
			webviewPanel.webview.html = this.getRecordSelectorHtml(webviewPanel.webview, updatedRecords, isReadOnly);
		} else {
			console.error('❌ Failed to delete record');
			vscode.window.showErrorMessage(`Failed to delete record "${recordName}".`);
		}
	}

	/**
	 * Create a standard DDS record format and open it in the visual designer.
	 */
	private async createRecord(
		document: vscode.TextDocument,
		requestedName: unknown,
		requestedType: unknown,
		requestedControlName: unknown,
		webviewPanel: vscode.WebviewPanel,
		saveMode: 'manual' | 'automatic',
		openBehavior: 'currentEditor' | 'newTab',
		zoom: number | undefined,
		onCreated: (recordName: string) => void
	): Promise<void> {
		if (await this.isDocumentReadOnly(document)) {
			vscode.window.showErrorMessage('This DSPF file is read-only.');
			return;
		}

		const existingNames = new Set(this.parseDspfRecords(document.getText()).map(record => record.name.toUpperCase()));
		const normalizedName = typeof requestedName === 'string' ? requestedName.trim().toUpperCase() : '';
		if (!/^[A-Z][A-Z0-9_@#$]{0,9}$/.test(normalizedName)) {
			vscode.window.showErrorMessage('Record names must use 1-10 characters, start with a letter, and contain only A-Z, 0-9, _, @, #, or $.');
			return;
		}

		if (existingNames.has(normalizedName)) {
			vscode.window.showErrorMessage(`Record "${normalizedName}" already exists.`);
			return;
		}

		const recordType = typeof requestedType === 'string' ? requestedType.toUpperCase() : 'RECORD';
		if (recordType !== 'RECORD' && recordType !== 'SFL' && recordType !== 'WINDOW') {
			vscode.window.showErrorMessage('Only RECORD, SFL, and WINDOW record types can be created from the designer.');
			return;
		}

		const normalizedControlName = typeof requestedControlName === 'string'
			? requestedControlName.trim().toUpperCase()
			: '';
		if (recordType === 'SFL') {
			if (!/^[A-Z][A-Z0-9_@#$]{0,9}$/.test(normalizedControlName)) {
				vscode.window.showErrorMessage('An SFL control record name must use 1-10 characters, start with a letter, and contain only A-Z, 0-9, _, @, #, or $.');
				return;
			}

			if (normalizedControlName === normalizedName || existingNames.has(normalizedControlName)) {
				vscode.window.showErrorMessage(`Record "${normalizedControlName}" already exists or matches the subfile name.`);
				return;
			}
		}

		const eol = document.eol === vscode.EndOfLine.CRLF ? '\r\n' : '\n';
		const content = document.getText();
		const separator = content.length === 0 || content.endsWith('\n') || content.endsWith('\r') ? '' : eol;
		const newRecords = recordType === 'SFL'
			? this.createSflTemplate(normalizedName, normalizedControlName, eol)
			: recordType === 'WINDOW'
				? this.createWindowTemplate(normalizedName, eol)
			: `     A          R ${normalizedName}${eol}`;
		const newContent = `${content}${separator}${newRecords}`;
		const edit = new vscode.WorkspaceEdit();
		const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(content.length));
		edit.replace(document.uri, fullRange, newContent);

		if (!await vscode.workspace.applyEdit(edit)) {
			vscode.window.showErrorMessage(`Failed to create record "${normalizedName}".`);
			return;
		}

		try {
			await document.save();
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			vscode.window.showErrorMessage(`Record created, but failed to save file: ${message}`);
			return;
		}

		onCreated(normalizedName);
		webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, normalizedName, saveMode, 'designer', openBehavior, zoom);
		const creationMessage = recordType === 'SFL'
			? `SFL record "${normalizedName}" and control record "${normalizedControlName}" created.`
			: `${recordType} record "${normalizedName}" created.`;
		vscode.window.showInformationMessage(creationMessage);
	}

	/**
	 * Builds the default WINDOW record with initial DS3 dimensions.
	 */
	private createWindowTemplate(recordName: string, eol: string): string {
		const recordLine = `     A          R ${recordName}`;
		const windowLine = `     A${''.padEnd(38)}WINDOW(2 2 10 10)`;
		return `${recordLine}${eol}${windowLine}${eol}`;
	}

	/**
	 * Builds the standard SFL/SFLCTL pair used when creating a new subfile.
	 */
	private createSflTemplate(subfileName: string, controlName: string, eol: string): string {
		const subfileRecord = `     A          R ${subfileName.padEnd(26)}SFL`;
		const controlRecord = `     A          R ${controlName.padEnd(26)}SFLCTL(${subfileName})`;
		const templateLines = [
			subfileRecord,
			'     A            SUBFOPC        1Y 0B 10  3EDTCDE(Z)',
			'     A            SUBFNAME      10A  O 10  7',
			controlRecord,
			'     A  *DS3                                SFLSIZ(0012)',
			'     A  *DS4                                SFLSIZ(0010)',
			'     A  *DS3                                SFLPAG(0012)',
			'     A  *DS4                                SFLPAG(0010)',
			'     A  28                                  SFLDSP',
			'     A                                      SFLDSPCTL',
			'     A  30                                  SFLINZ',
			'     A  32                                  SFLDLT',
			'     A  29                                  SFLCLR',
			'     A  27                                  SFLEND(*MORE)',
			'     A                                  1 71DATE',
			'     A                                      EDTCDE(Y)',
			'     A                                      COLOR(WHT)',
			'     A                                  2 71TIME',
			'     A                                      COLOR(WHT)',
			'     A                                  3 71SYSNAME',
			'     A                                      COLOR(WHT)',
			'     A                                  1 13USER',
			'     A                                      COLOR(WHT)',
			'     A            TITLE01       78A  O  9  2COLOR(WHT)',
			'     A            PGMNAME       10A  O  2 13COLOR(WHT)',
			"     A                                  1  3'USER....:'",
			'     A                                      COLOR(WHT)',
			"     A                                  2  3'PROGRAM.:'",
			'     A                                      COLOR(WHT)'
		];

		return `${templateLines.join(eol)}${eol}`;
	}

	/**
	 * Generate a DDS line for a field
	 */
	private generateDDSLine(field: any): string {
		const { name, type, row, col, length, value } = field;
		
		let ddsLine = '     A';
		
		// Add positioning
		ddsLine += `         ${name.padEnd(10)}`;
		
		// Add row/column positioning
		ddsLine += `${row.toString().padStart(2)}${col.toString().padStart(2)}`;

		// Add field attributes based on type
		switch (type) {
			case 'input':
				ddsLine += 'I';
				if (length) {
					ddsLine += ` ${length}`;
				}
				break;
			case 'output':
				ddsLine += 'O';
				if (length) {
					ddsLine += ` ${length}`;
				}
				break;
			case 'constant':
				if (value) {
					ddsLine += `'${value}'`;
				}
				break;
		}

		return ddsLine;
	}

	/**
	 * Open a preview window for the DSPF (External window - currently disabled)
	 */
	// private async openPreviewWindow(previewHtml: string, document: vscode.TextDocument): Promise<void> {
	// 	// Create a new webview panel for the preview
	// 	const previewPanel = vscode.window.createWebviewPanel(
	// 		'dspfPreview',
	// 		`DSPF Preview - ${path.basename(document.fileName)}`,
	// 		vscode.ViewColumn.Beside,
	// 		{
	// 			enableScripts: true,
	// 			retainContextWhenHidden: true
	// 		}
	// 	);

	// 	// Set the HTML content
	// 	previewPanel.webview.html = previewHtml;

	// 	// Add icon to the panel
	// 	previewPanel.iconPath = {
	// 		light: vscode.Uri.joinPath(this.context.extensionUri, 'media', 'preview-light.svg'),
	// 		dark: vscode.Uri.joinPath(this.context.extensionUri, 'media', 'preview-dark.svg')
	// 	};
	// }

	/**
	 * Parse DSPF content to find all record formats
	 */
	private parseDspfRecords(content: string): Array<{name: string, type: string, lineStart: number, lineEnd: number}> {
		const lines = content.split('\n');
		const records: Array<{name: string, type: string, lineStart: number, lineEnd: number}> = [];
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			
			// Look for record format declarations: A          R RECORDNAME
			if (line.match(/^.{0,5}A\s+R\s+\w+/)) {
				const match = line.match(/^.{0,5}A\s+R\s+(\w+)(.*)$/);
				if (match) {
					const recordName = match[1];
					let attributes = match[2].trim();
					
					// Find the end of this record (next record or end of file)
					let lineEnd = lines.length - 1;
					for (let j = i + 1; j < lines.length; j++) {
						if (lines[j].trim().match(/^.{0,5}A\s+R\s+\w+/)) {
							lineEnd = j - 1;
							break;
						}
					}
					
					// Collect all attributes from the entire record (not just first line)
					let allRecordContent = attributes;
					for (let j = i + 1; j <= lineEnd; j++) {
						const recordLine = lines[j].trim();
						if (recordLine.startsWith('A ') && !recordLine.includes("'")) {
							allRecordContent += ' ' + recordLine;
						}
					}
					
					// Determine record type based on ALL content in the record
					let recordType = this.detectRecordType(recordName, allRecordContent);
					
					records.push({
						name: recordName,
						type: recordType,
						lineStart: i,
						lineEnd: lineEnd
					});
				}
			}
		}
		
		return records;
	}

	/**
	 * Detect record type based on IBM i DSPF keywords and naming patterns
	 */
	private detectRecordType(recordName: string, attributes: string): string {
		const nameUpper = recordName.toUpperCase();
		const attrUpper = attributes.toUpperCase();
		
		// Check for explicit IBM i DSPF keywords first
		if (attrUpper.includes('SFL') && !attrUpper.includes('SFLCTL') && !attrUpper.includes('SFLMSG') && !attrUpper.includes('WDWSFL')) {
			return 'SFL';
		}
		if (attrUpper.includes('SFLCTL')) {
			return 'SFLCTL';
		}
		if (attrUpper.includes('SFLMSG')) {
			return 'SFLMSG';
		}
		if (attrUpper.includes('WINDOW')) {
			return 'WINDOW';
		}
		if (attrUpper.includes('WDWSFL')) {
			return 'WDWSFL';
		}
		if (attrUpper.includes('PULLDOWN') || attrUpper.includes('PULDWN')) {
			return 'PULDWN';
		}
		if (attrUpper.includes('PDNSFL')) {
			return 'PDNSFL';
		}
		if (attrUpper.includes('MNUBAR')) {
			return 'MNUBAR';
		}
		if (attrUpper.includes('USRDFN')) {
			return 'USRDFN';
		}
		
		// Check by naming patterns (common conventions)
		if (nameUpper.includes('SFL') && !nameUpper.includes('CTL') && !nameUpper.includes('MSG')) {
			return 'SFL';
		}
		if (nameUpper.includes('SFLCTL') || nameUpper.includes('CTL')) {
			return 'SFLCTL';
		}
		// Only consider it SFLMSG if the name explicitly contains 'SFLMSG', not just 'MSG'
		// Many regular records have 'MSG' in their names (MSGESTCTA, MSGCTAPANT, etc.)
		if (nameUpper.includes('SFLMSG')) {
			return 'SFLMSG';
		}
		if (nameUpper.includes('WIN') || nameUpper.includes('WINDOW')) {
			return 'WINDOW';
		}
		if (nameUpper.includes('WDWSFL')) {
			return 'WDWSFL';
		}
		if (nameUpper.includes('PULL') || nameUpper.includes('MENU')) {
			return 'PULDWN';
		}
		if (nameUpper.includes('PDNSFL')) {
			return 'PDNSFL';
		}
		if (nameUpper.includes('MNUBAR') || nameUpper.includes('BAR')) {
			return 'MNUBAR';
		}
		if (nameUpper.includes('USRDFN') || nameUpper.includes('USER')) {
			return 'USRDFN';
		}
		
		// Default to RECORD if no specific type detected
		return 'RECORD';
	}

	/**
	 * Get HTML for record selector view
	 */
	private getRecordSelectorHtml(webview: vscode.Webview, records: Array<{name: string, type: string, lineStart: number, lineEnd: number}>, isReadOnly: boolean = false, saveMode: 'manual' | 'automatic' = 'automatic'): string {
		const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'dspfDesigner.css'));
		
		const fontUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', '3270-Regular.woff'));
		
		const nonce = this.getNonce();

		const recordCards = records.map(record => `
			<div class="record-card" data-record="${record.name}">
				<div class="record-card-header">
					<div class="record-icon">${this.getRecordIcon(record.type)}</div>
					<div class="record-info">
						<h3>${record.name}</h3>
						<p class="record-type">${record.type}</p>
						<p class="record-description">${this.getRecordDescription(record.type)}</p>
						<p class="record-lines">Lines ${record.lineStart + 1} - ${record.lineEnd + 1}</p>
					</div>
				</div>
				<div class="record-actions">
					${!isReadOnly ? `<button class="edit-btn" data-record="${record.name}">Edit</button>` : ''}
					<button class="display-btn" data-record="${record.name}">Display</button>
					${!isReadOnly ? `<button class="delete-btn" data-record="${record.name}">Delete</button>` : ''}
				</div>
			</div>
		`).join('');

		return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; font-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="${styleUri}" rel="stylesheet">
	<title>DSPF Records</title>
	<style>
		@font-face {
			font-family: '3270';
			src: url('${fontUri}') format('woff');
			font-weight: normal;
			font-style: normal;
		}
	</style>
	<style>
		.records-container {
			padding: 20px;
			max-width: 1200px;
			margin: 0 auto;
			height: 100vh;
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}
		.records-top-bar {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 12px;
			margin-bottom: 8px;
		}
		.settings-btn {
			background: var(--vscode-button-secondaryBackground);
			color: var(--vscode-button-secondaryForeground);
			border: 1px solid var(--vscode-button-border);
			padding: 8px 14px;
			border-radius: 4px;
			cursor: pointer;
			white-space: nowrap;
			font-size: 0.9em;
		}
		.settings-btn:hover {
			background: var(--vscode-button-secondaryHoverBackground);
		}
		.records-header {
			margin-bottom: 30px;
			text-align: center;
			flex-shrink: 0;
		}
		.records-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 20px;
			margin-bottom: 30px;
			overflow-y: auto;
			flex: 1;
			padding-right: 10px;
		}
		.records-grid::-webkit-scrollbar {
			width: 10px;
		}
		.records-grid::-webkit-scrollbar-track {
			background: var(--vscode-scrollbarSlider-background);
		}
		.records-grid::-webkit-scrollbar-thumb {
			background: var(--vscode-scrollbarSlider-hoverBackground);
			border-radius: 5px;
		}
		.records-grid::-webkit-scrollbar-thumb:hover {
			background: var(--vscode-scrollbarSlider-activeBackground);
		}
		.record-card {
			background: var(--vscode-editor-background);
			border: 2px solid var(--vscode-panel-border);
			border-radius: 8px;
			padding: 20px;
			cursor: pointer;
			transition: all 0.3s ease;
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		.record-card:hover {
			border-color: var(--vscode-focusBorder);
			background: var(--vscode-list-hoverBackground);
		}
		.record-card-header {
			display: flex;
			align-items: flex-start;
			gap: 15px;
		}
		.record-icon {
			font-size: 2em;
			min-width: 40px;
			flex-shrink: 0;
			pointer-events: none;
		}
		.record-info {
			flex: 1;
			pointer-events: none;
			min-width: 0;
		}
		.record-info h3 {
			margin: 0 0 5px 0;
			color: var(--vscode-foreground);
			font-size: 1.2em;
			white-space: nowrap;
			overflow: visible;
		}
		.record-type {
			margin: 0 0 3px 0;
			color: var(--vscode-descriptionForeground);
			font-weight: bold;
			font-size: 0.9em;
			white-space: nowrap;
			overflow: visible;
		}
		.record-description {
			margin: 0 0 5px 0;
			color: var(--vscode-descriptionForeground);
			font-size: 0.8em;
			font-style: italic;
			white-space: nowrap;
			overflow: visible;
		}
		.record-lines {
			margin: 0;
			color: var(--vscode-descriptionForeground);
			font-size: 0.8em;
			white-space: nowrap;
			overflow: visible;
		}
		.record-actions {
			display: flex;
			gap: 8px;
			align-items: center;
			flex-shrink: 0;
			flex-wrap: nowrap;
		}
		.edit-btn {
			background: var(--vscode-button-background);
			color: var(--vscode-button-foreground);
			border: none;
			padding: 8px 16px;
			border-radius: 4px;
			cursor: pointer;
			white-space: nowrap;
			flex-shrink: 0;
		}
		.edit-btn:hover {
			background: var(--vscode-button-hoverBackground);
		}
		.display-btn {
			background: var(--vscode-button-secondaryBackground);
			color: var(--vscode-button-secondaryForeground);
			border: 1px solid var(--vscode-button-border);
			padding: 8px 16px;
			border-radius: 4px;
			cursor: pointer;
			white-space: nowrap;
			flex-shrink: 0;
		}
		.display-btn:hover {
			background: var(--vscode-button-secondaryHoverBackground);
		}
		.delete-btn {
			background: var(--vscode-errorForeground);
			color: var(--vscode-button-foreground);
			border: none;
			padding: 8px 16px;
			border-radius: 4px;
			cursor: pointer;
			white-space: nowrap;
			flex-shrink: 0;
		}
		.delete-btn:hover {
			opacity: 0.8;
		}
		.add-record-btn {
			background: var(--vscode-button-background);
			color: var(--vscode-button-foreground);
			border: none;
			padding: 12px 24px;
			border-radius: 6px;
			cursor: pointer;
			font-size: 1em;
			display: block;
			margin: 0 auto;
			flex-shrink: 0;
		}
		.delete-modal {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1000;
		}
		.modal-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.5);
		}
		.modal-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: var(--vscode-editor-background);
			border: 1px solid var(--vscode-widget-border);
			border-radius: 6px;
			padding: 24px;
			min-width: 400px;
			max-width: 500px;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
		}
		.modal-content h2 {
			margin: 0 0 16px 0;
			color: var(--vscode-errorForeground);
			font-size: 1.3em;
		}
		.modal-content p {
			margin: 0 0 12px 0;
			color: var(--vscode-foreground);
			line-height: 1.5;
		}
		.warning-text {
			color: var(--vscode-errorForeground);
			font-size: 0.9em;
			font-style: italic;
		}
		.modal-buttons {
			display: flex;
			gap: 12px;
			justify-content: flex-end;
			margin-top: 24px;
		}
		.modal-btn {
			padding: 8px 20px;
			border-radius: 4px;
			cursor: pointer;
			font-size: 1em;
			border: none;
		}
		.modal-no {
			background: var(--vscode-button-background);
			color: var(--vscode-button-foreground);
		}
		.modal-no:hover {
			background: var(--vscode-button-hoverBackground);
		}
		.modal-yes {
			background: var(--vscode-errorForeground);
			color: var(--vscode-button-foreground);
		}
		.modal-yes:hover {
			opacity: 0.8;
		}
		.create-record-modal h2 {
			color: var(--vscode-foreground);
		}
		.create-record-form {
			display: grid;
			gap: 14px;
		}
		.create-record-form label {
			display: grid;
			gap: 6px;
			color: var(--vscode-foreground);
			font-weight: 600;
		}
		.create-record-form input,
		.create-record-form select {
			width: 100%;
			padding: 8px;
			color: var(--vscode-input-foreground);
			background: var(--vscode-input-background);
			border: 1px solid var(--vscode-input-border);
			border-radius: 4px;
		}
		.create-record-btn {
			background: var(--vscode-button-background);
			color: var(--vscode-button-foreground);
		}
		.create-record-btn:hover {
			background: var(--vscode-button-hoverBackground);
		}
		.sfl-control-name-row[hidden] {
			display: none;
		}
	</style>
</head>
<body>
	<div class="records-container">
		<div class="records-top-bar">
			<button class="settings-btn" type="button" title="Open DSPF Designer extension settings">Settings</button>
		</div>

		<div class="records-header">
			<h1>DSPF Records</h1>
			<p>Select a record to edit in the visual designer</p>
		</div>
		
		<div class="records-grid">
			${recordCards}
		</div>
		
		${!isReadOnly ? '<button class="add-record-btn">Add New Record</button>' : ''}
	</div>

	<script nonce="${nonce}">
		console.log('🚀 Record selector script starting...');
		window.dspfDesignerConfig = {
			saveMode: '${saveMode}'
		};
		const vscode = acquireVsCodeApi();
		
		function selectRecord(recordName) {
			console.log('🎯 Selecting record:', recordName);
			vscode.postMessage({
				type: 'selectRecord',
				recordName: recordName
			});
		}
		
		function addNewRecord() {
			const modal = document.createElement('div');
			modal.className = 'delete-modal create-record-modal';
			modal.innerHTML = \
				'<div class="modal-overlay"></div>' +
				'<div class="modal-content">' +
					'<h2>New Record</h2>' +
					'<form class="create-record-form">' +
						'<label>Name<input name="recordName" maxlength="10" autocomplete="off" autofocus required /></label>' +
						'<label>Type<select name="recordType"><option value="RECORD">RECORD</option><option value="SFL">SFL</option><option value="WINDOW">WINDOW</option></select></label>' +
						'<label class="sfl-control-name-row" hidden>Subfile control record name<input name="controlRecordName" maxlength="10" autocomplete="off" /></label>' +
						'<div class="modal-buttons">' +
							'<button class="modal-btn modal-no" type="button">Cancel</button>' +
							'<button class="modal-btn create-record-btn" type="submit">Create</button>' +
						'</div>' +
					'</form>' +
				'</div>';
			document.body.appendChild(modal);

			const form = modal.querySelector('.create-record-form');
			const nameInput = modal.querySelector('[name="recordName"]');
			const typeSelect = modal.querySelector('[name="recordType"]');
			const controlNameRow = modal.querySelector('.sfl-control-name-row');
			const controlNameInput = modal.querySelector('[name="controlRecordName"]');
			const closeModal = () => modal.remove();
			const updateControlNameVisibility = () => {
				const isSubfile = typeSelect.value === 'SFL';
				controlNameRow.hidden = !isSubfile;
				controlNameInput.required = isSubfile;
				if (!isSubfile) {
					controlNameInput.value = '';
					controlNameInput.setCustomValidity('');
				}
			};

			modal.querySelector('.modal-no').addEventListener('click', closeModal);
			modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				const recordName = nameInput.value.trim().toUpperCase();
				if (!/^[A-Z][A-Z0-9_@#$]{0,9}$/.test(recordName)) {
					nameInput.setCustomValidity('Use 1-10 characters, starting with a letter.');
					nameInput.reportValidity();
					return;
				}

				const controlRecordName = controlNameInput.value.trim().toUpperCase();
				if (typeSelect.value === 'SFL' && !/^[A-Z][A-Z0-9_@#$]{0,9}$/.test(controlRecordName)) {
					controlNameInput.setCustomValidity('Use 1-10 characters, starting with a letter.');
					controlNameInput.reportValidity();
					return;
				}

				vscode.postMessage({ type: 'createRecord', recordName, recordType: typeSelect.value, controlRecordName });
				closeModal();
			});

			nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));
			controlNameInput.addEventListener('input', () => controlNameInput.setCustomValidity(''));
			typeSelect.addEventListener('change', updateControlNameVisibility);
			updateControlNameVisibility();
			nameInput.focus();
		}

		function openAdvancedOptions() {
			vscode.postMessage({
				type: 'openExtensionSettings'
			});
		}
		
		// Add click event listeners when DOM is ready
		document.addEventListener('DOMContentLoaded', function() {
			console.log('📄 Record selector loaded - Setting up event listeners');
			
			// Use event delegation on the parent container for better reliability
			const recordsGrid = document.querySelector('.records-grid');
			const recordCards = document.querySelectorAll('.record-card');
			console.log('🔍 Found record cards:', recordCards.length);
			
			// Log all cards for debugging
			recordCards.forEach((card, index) => {
				const recordName = card.getAttribute('data-record');
				console.log(\`📋 Card \${index}: \${recordName}\`);
			});
			
			// Use event delegation from the grid container
			if (recordsGrid) {
				recordsGrid.addEventListener('click', function(event) {
					// Find the closest button or card
					const editBtn = event.target.closest('.edit-btn');
					const displayBtn = event.target.closest('.display-btn');
					const deleteBtn = event.target.closest('.delete-btn');
					const recordCard = event.target.closest('.record-card');
					
					console.log('🖱️ Click detected - target:', event.target.className);
					
					if (editBtn) {
						// Edit button was clicked
						const recordName = editBtn.getAttribute('data-record');
						console.log('🔘 Edit button clicked for:', recordName);
						event.stopPropagation();
						vscode.postMessage({ 
							type: 'openRecord', 
							recordName: recordName,
							readOnly: false
						});
					} else if (displayBtn) {
						// Display button was clicked
						const recordName = displayBtn.getAttribute('data-record');
						console.log('👁️ Display button clicked for:', recordName);
						event.stopPropagation();
						vscode.postMessage({ 
							type: 'openRecord', 
							recordName: recordName,
							readOnly: true
						});
					} else if (deleteBtn) {
						// Delete button was clicked
						const recordName = deleteBtn.getAttribute('data-record');
						console.log('🗑️ Delete button clicked for:', recordName);
						event.stopPropagation();
						
						// Show confirmation dialog
						const modal = document.createElement('div');
						modal.className = 'delete-modal';
						modal.innerHTML = \`
							<div class="modal-overlay"></div>
							<div class="modal-content">
								<h2>⚠️ Delete Record</h2>
								<p>Are you sure you want to delete the record "<strong>\${recordName}</strong>"?</p>
								<p class="warning-text">This action cannot be undone.</p>
								<div class="modal-buttons">
									<button class="modal-btn modal-no" autofocus>No</button>
									<button class="modal-btn modal-yes">Yes</button>
								</div>
							</div>
						\`;
						document.body.appendChild(modal);
						
						// Focus the No button
						setTimeout(() => {
							const noBtn = modal.querySelector('.modal-no');
							if (noBtn) noBtn.focus();
						}, 10);
						
						// Handle button clicks
						modal.querySelector('.modal-no').addEventListener('click', () => {
							document.body.removeChild(modal);
						});
						
						modal.querySelector('.modal-yes').addEventListener('click', () => {
							document.body.removeChild(modal);
							vscode.postMessage({ 
								type: 'deleteRecord', 
								recordName: recordName
							});
						});
						
						// Close on overlay click
						modal.querySelector('.modal-overlay').addEventListener('click', () => {
							document.body.removeChild(modal);
						});
					} else if (recordCard) {
						// Card was clicked - default to edit if not read-only, otherwise display
						const recordName = recordCard.getAttribute('data-record');
						console.log('📋 Card clicked for:', recordName);
						vscode.postMessage({ 
							type: 'openRecord', 
							recordName: recordName,
							readOnly: ${isReadOnly}
						});
					}
				});
			} else {
				console.error('❌ records-grid not found!');
			}
			
			// Add event listener to add new record button
			const addBtn = document.querySelector('.add-record-btn');
			if (addBtn) {
				addBtn.addEventListener('click', addNewRecord);
			}

			const settingsBtn = document.querySelector('.settings-btn');
			if (settingsBtn) {
				settingsBtn.addEventListener('click', openAdvancedOptions);
			}
		});
	</script>
</body>
</html>`;
	}

	/**
	 * Get icon for record type based on IBM i DSPF record types
	 */
	private getRecordIcon(type: string): string {
		switch (type) {
			case 'RECORD': return '📄';        // Standard record format
			case 'USRDFN': return '👤';        // User-defined record
			case 'SFL': return '📋';           // Subfile record
			case 'SFLCTL': return '⚙️';        // Subfile control record  
			case 'SFLMSG': return '💬';        // Subfile message record
			case 'WINDOW': return '🪟';        // Window record
			case 'WDWSFL': return '🪟📋';      // Window subfile record
			case 'PULDWN': return '📖';        // Pull-down menu record
			case 'PDNSFL': return '📖📋';      // Pull-down subfile record
			case 'MNUBAR': return '🔧';        // Menu bar record
			default: return '📄';             // Default to standard record
		}
	}

	/**
	 * Get description for record type based on IBM i DSPF record types
	 */
	private getRecordDescription(type: string): string {
		switch (type) {
			case 'RECORD': return 'Standard display record';
			case 'USRDFN': return 'User-defined record format';
			case 'SFL': return 'Subfile data record';
			case 'SFLCTL': return 'Subfile control record';
			case 'SFLMSG': return 'Subfile message record';
			case 'WINDOW': return 'Window display record';
			case 'WDWSFL': return 'Window subfile record';
			case 'PULDWN': return 'Pull-down menu record';
			case 'PDNSFL': return 'Pull-down subfile record';
			case 'MNUBAR': return 'Menu bar record';
			default: return 'Display record format';
		}
	}

	/**
	 * Generate a random nonce for CSP
	 */
	private getNonce() {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 32; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
}