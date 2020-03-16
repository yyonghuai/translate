import { window, QuickPickItem } from "vscode";

// 翻译结果 展示 -> 快速选择栏
export default function showQuickPick (res: QuickPickItem[]): Promise<QuickPickItem> {
  return new Promise(resolve => {
    window.showQuickPick(res, {
      matchOnDescription: true
    }).then((item: QuickPickItem | undefined) => {
      if (item !== undefined) {
        resolve(item);
      }
    });
  });
}