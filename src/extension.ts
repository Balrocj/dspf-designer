import * as vscode from 'vscode';
import { DspfEditorProvider } from './dspfEditorProvider';

class DspfCodeLensProvider implements vscode.CodeLensProvider {
	public provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
		if (!document.fileName.toLowerCase().endsWith('.dspf')) {
			return [];
		}

		const lenses: vscode.CodeLens[] = [];

		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i).text;
			const match = line.match(/^\s*A\s+R\s+(\w+)/i);
			if (match) {
				const recordName = match[1];
				const range = new vscode.Range(i, 0, i, 0);
				lenses.push(new vscode.CodeLens(range, {
					title: 'Preview With DSPF Designer',
					command: 'dspfDesigner.openPreview',
					arguments: [document.uri, recordName]
				}));
			}
		}

		return lenses;
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('DSPF Designer extension is now active!');

	type OpenBehavior = 'currentEditor' | 'newTab';
	type PreviewOpenBehavior = 'newTab' | 'splitView';
	type OpenMode = 'designer' | 'preview';

	const getOpenBehavior = (): OpenBehavior => {
		const configValue = vscode.workspace.getConfiguration('dspfDesigner').get<string>('openBehavior', 'currentEditor');
		return configValue === 'newTab' ? 'newTab' : 'currentEditor';
	};

	const getPreviewOpenBehavior = (): PreviewOpenBehavior => {
		const configValue = vscode.workspace.getConfiguration('dspfDesigner').get<string>('previewOpenBehavior', 'newTab');
		return configValue === 'splitView' ? 'splitView' : 'newTab';
	};

	const isDesignerTabActive = () => {
		const activeTab = vscode.window.tabGroups.activeTabGroup.activeTab;
		if (!(activeTab?.input instanceof vscode.TabInputCustom) || activeTab.input.viewType !== 'dspfDesigner.editor') {
			return false;
		}

		return provider.getOpenMode(activeTab.input.uri) === 'designer';
	};

	const closeOpenCustomEditorsForUri = async (targetUri: vscode.Uri) => {
		const uriKey = targetUri.toString();
		const tabsToClose: vscode.Tab[] = [];

		for (const group of vscode.window.tabGroups.all) {
			for (const tab of group.tabs) {
				if (tab.input instanceof vscode.TabInputCustom
					&& tab.input.viewType === 'dspfDesigner.editor'
					&& tab.input.uri.toString() === uriKey) {
					tabsToClose.push(tab);
				}
			}
		}

		if (tabsToClose.length > 0) {
			await vscode.window.tabGroups.close(tabsToClose, true);
		}
	};

	const getActiveDspfUri = (fallbackUri?: vscode.Uri) => {
		if (fallbackUri) {
			return fallbackUri;
		}

		const activeTab = vscode.window.tabGroups.activeTabGroup.activeTab;
		if (activeTab?.input instanceof vscode.TabInputCustom && activeTab.input.viewType === 'dspfDesigner.editor') {
			return activeTab.input.uri;
		}

		if (activeTab?.input instanceof vscode.TabInputText) {
			return activeTab.input.uri;
		}

		return vscode.window.activeTextEditor?.document?.uri;
	};

	const updateDesignerModeContext = async () => {
		await vscode.commands.executeCommand('setContext', 'dspfDesigner.isInDesignerMode', isDesignerTabActive());
	};

	// Register the custom editor provider
	const provider = new DspfEditorProvider(context);
	const disposable = vscode.window.registerCustomEditorProvider('dspfDesigner.editor', provider, {
		webviewOptions: {
			retainContextWhenHidden: true,
		},
		supportsMultipleEditorsPerDocument: false,
	});

	const openInCustomEditor = async (targetUri: vscode.Uri, mode: OpenMode, preferBeside = false, recordName?: string) => {
		await closeOpenCustomEditorsForUri(targetUri);
		provider.queueOpenMode(targetUri, mode, recordName);

		const openWithOptions: vscode.TextDocumentShowOptions = {
			preview: false,
			preserveFocus: false,
			viewColumn: preferBeside ? vscode.ViewColumn.Beside : vscode.ViewColumn.Active
		};

		await vscode.commands.executeCommand('vscode.openWith', targetUri, 'dspfDesigner.editor', openWithOptions);
		await updateDesignerModeContext();
	};

	// Register commands
	const openDesignerCommand = vscode.commands.registerCommand('dspfDesigner.openDesigner', async (uri?: vscode.Uri) => {
		const targetUri = getActiveDspfUri(uri);
		if (!targetUri) {
			vscode.window.showWarningMessage('No DSPF file is currently active.');
			return;
		}

		const openBehavior = getOpenBehavior();

		if (isDesignerTabActive()) {
			if (openBehavior === 'currentEditor') {
				await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				await vscode.commands.executeCommand('vscode.open', targetUri);
			} else {
				await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				await vscode.commands.executeCommand('vscode.open', targetUri, { preserveFocus: false, preview: false });
			}
			await updateDesignerModeContext();
			return;
		}

		if (openBehavior === 'currentEditor') {
			await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
			await openInCustomEditor(targetUri, 'designer');
		} else {
			await openInCustomEditor(targetUri, 'designer');
		}
	});

	const openPreviewCommand = vscode.commands.registerCommand('dspfDesigner.openPreview', async (uri?: vscode.Uri, recordName?: string) => {
		const targetUri = getActiveDspfUri(uri);
		if (!targetUri) {
			vscode.window.showWarningMessage('No DSPF file is currently active.');
			return;
		}

		const previewOpenBehavior = getPreviewOpenBehavior();

		if (previewOpenBehavior === 'splitView') {
			await openInCustomEditor(targetUri, 'preview', true, recordName);
			return;
		}

		await openInCustomEditor(targetUri, 'preview', false, recordName);
	});

	const exitDesignerCommand = vscode.commands.registerCommand('dspfDesigner.exitDesigner', async (uri?: vscode.Uri) => {
		const targetUri = getActiveDspfUri(uri);
		if (!targetUri) {
			vscode.window.showWarningMessage('No DSPF file is currently active.');
			return;
		}

		if (getOpenBehavior() === 'currentEditor') {
			await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
			await vscode.commands.executeCommand('vscode.open', targetUri);
		} else {
			// In newTab mode, close designer and focus text editor without replacing layout.
			if (isDesignerTabActive()) {
				await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
			}
			await vscode.commands.executeCommand('vscode.open', targetUri, { preserveFocus: false, preview: false });
		}
		await updateDesignerModeContext();
	});

	const activeTabListener = vscode.window.tabGroups.onDidChangeTabs(async () => {
		await updateDesignerModeContext();
	});

	const codeLensProvider = vscode.languages.registerCodeLensProvider(
		{ pattern: '**/*.dspf' },
		new DspfCodeLensProvider()
	);

	void updateDesignerModeContext();

	context.subscriptions.push(
		disposable,
		codeLensProvider,
		openDesignerCommand,
		openPreviewCommand,
		exitDesignerCommand,
		activeTabListener
	);
}

export function deactivate() {}