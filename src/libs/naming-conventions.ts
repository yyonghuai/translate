import * as ConvertString from './convert-string';
import { QuickPickItem } from "vscode";

/**
 * 命名规则转化
 * @export
 * @param {string} str 翻译后的英文单词词组 2个以上单词
 * @returns {QuickPickItem[]} vscode 快速选择 数组
 */
export default function namingConventions (str: string): QuickPickItem[] {
  return [
    {
      label: '默认',
      description: str
    },
    {
      label: '小驼峰',
      description: ConvertString.smallHump(str)
    },
    {
      label: '大驼峰',
      description: ConvertString.bigHump(str)
    },
    {
      label: '连词线',
      description: ConvertString.wordLine(str)
    },
    {
      label: '下划线',
      description: ConvertString.underline(str)
    },
    {
      label: '常量',
      description: ConvertString.constant(str)
    },
  ];
}
