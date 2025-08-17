/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "forge-editor" is now active!');

	// Register an event listener for when a text document is opened
	const onDidOpenTextDocument = vscode.workspace.onDidOpenTextDocument((document: vscode.TextDocument) => {
		const fileName = document.fileName;

		// Regular expression to match our custom file types
		const fileTypeRegex = /\.(character|item|quest|dialogue)\.json$/;
		const match = fileName.match(fileTypeRegex);

		if (match) {
			const type = match[1]; // e.g., "character", "quest"
			vscode.window.showInformationMessage(`Forge Editor: Detected a "${type}" file.`);
			// Here you would eventually trigger the opening of your custom editor
		}
	});

	context.subscriptions.push(onDidOpenTextDocument);
}

// This method is called when your extension is deactivated
export function deactivate() { }
