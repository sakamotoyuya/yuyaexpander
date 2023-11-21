import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('y.expand', () => {
        focusAndExpandAll();
    });

    context.subscriptions.push(disposable);
}

async function focusAndExpandAll() {
    showToast("処理を開始します。")
    // エクスプローラーをアクティブにする
    // エクスプローラーで上矢印キーを押す
    // await vscode.commands.executeCommand('list.focusUp');
    await vscode.commands.executeCommand('list.expand');
    // エクスプローラーで下矢印キーを押す（これによりフォーカスが一番上に移動）
    for (let index = 0; index < 500; index++) {
        await vscode.commands.executeCommand('list.focusDown');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
        await vscode.commands.executeCommand('list.expand');
    }
    showToast("完了しました。");
}

function showToast(str: string) {
    vscode.window.showInformationMessage(str);
}

// この拡張機能が非アクティブになったときに呼ばれる
export function deactivate() { }