import { window, Range, QuickPickItem } from "vscode";
import Translator from './libs/get-main-translator';
import han from './libs/is-han';
import namingConventions from './libs/naming-conventions';
import processingTranslationResults from './libs/processing-translation-results';
import twiceTranslate from './libs/twice-translate';
import showQuickPick from './libs/show-quick-pick';

export const translate = async () => {
  const editor = window.activeTextEditor;
  if (!editor) {
    window.showInformationMessage('Open a file first to manipulate text selections');
    return;
  }
  // 获取选中的文本
  const selections = editor.selections;
  const range = new Range(selections[0].start, selections[selections.length - 1].end);
  const text = editor.document.getText(range) || '';
  // 首次翻译
  const translateResult = await Translator.translate(text);
  // 处理首次翻译结果
  const processingTranslateResult: string[] = processingTranslationResults(translateResult);
  // 二次翻译
  const twiceTranslateResult: QuickPickItem[] = await twiceTranslate(processingTranslateResult);
  // 选择翻译结果
  const pickItem: QuickPickItem = await showQuickPick(twiceTranslateResult);
  // 判断翻译结果是否是汉语 或 翻译结果只有一个单词
  if (han(pickItem.label) || pickItem.label.split(' ').length === 1) {
    // 汉语 或 一个单词
    editor.edit(edit => edit.replace(range, pickItem.label));
  } else {
    // 多个英文 弹出快速选择 命名规则
    const quickPick: QuickPickItem[] = namingConventions(pickItem.label);
    showQuickPick(quickPick).then((item: QuickPickItem) => {
      editor.edit(edit => edit.replace(range, <string>item.description));
    });
  }
};
