
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('itmo-button.openItmo', function () {
		vscode.env.openExternal(vscode.Uri.parse('https://my.itmo.ru/schedule'));
	});
	
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
