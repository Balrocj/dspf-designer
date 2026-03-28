import * as vscode from 'vscode';
import { DspfEditorProvider } from './dspfEditorProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log('DSPF Designer extension is now active!');

	type OpenBehavior = 'currentEditor' | 'newTab';

	const getOpenBehavior = (): OpenBehavior => {
		const configValue = vscode.workspace.getConfiguration('dspfDesigner').get<string>('openBehavior', 'currentEditor');
		return configValue === 'newTab' ? 'newTab' : 'currentEditor';
	};

	const isDesignerTabActive = () => {
		const activeTab = vscode.window.tabGroups.activeTabGroup.activeTab;
		return activeTab?.input instanceof vscode.TabInputCustom && activeTab.input.viewType === 'dspfDesigner.editor';
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
			await vscode.commands.executeCommand('vscode.openWith', targetUri, 'dspfDesigner.editor');
		} else {
			await vscode.commands.executeCommand('vscode.openWith', targetUri, 'dspfDesigner.editor', {
				preview: false,
				preserveFocus: false
			});
		}
		await updateDesignerModeContext();
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

	void updateDesignerModeContext();

	context.subscriptions.push(
		disposable,
		openDesignerCommand,
		exitDesignerCommand,
		activeTabListener
	);
}

export function deactivate() {}