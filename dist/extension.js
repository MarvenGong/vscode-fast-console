"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = __importDefault(require("vscode"));
// const { toCamelCase } = require('./utils/string-utils');
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
function activate(context) {
    console.log('恭喜，您的扩展“vscode-fast-console”已被激活！');
    // 注册命令
    context.subscriptions.push(vscode_1.default.commands.registerCommand('extension.addConsole', (context) => {
        console.log('开始转换222');
        console.log(context);
        const { path } = context;
        const editor = vscode_1.default.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        const { selection, document } = editor;
        const range = document.getWordRangeAtPosition(selection.start);
        const text = document.getText(range);
        console.info(selection.contains);
        console.info('选中内容', text);
        // fs.writeFileSync(path, selection);
        // vscode.window.showInformationMessage(content);
    }));
    // context.subscriptions.push(vscode.commands.registerCommand('extension.toCamelSingle', () => {
    //   const editor = vscode.window.activeTextEditor;
    //   if (!editor) {
    //     return; // No open text editor
    //   }
    //   const { selection, document } = editor;
    //   // console.log(toCamelCase(subline2ThoughLine, true));
    //   editor.edit((editBuilder) => {
    //     editor.selections.forEach((sel) => {
    //       const range = sel.isEmpty ? document.getWordRangeAtPosition(sel.start) || sel : sel;
    //       const text = document.getText(range);
    //       const subline2ThoughLine = text.replaceAll('_', '-');
    //       editBuilder.replace(range, toCamelCase(subline2ThoughLine, true));
    //     });
    //   });
    // }));
}
exports.activate = activate;
;
/**
 * 插件被释放时触发
 */
function deactivate() {
    console.log('您的扩展“vscode-fast-console”已被释放！');
}
exports.deactivate = deactivate;
;
//# sourceMappingURL=extension.js.map