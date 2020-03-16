import { TranslateResult } from './interface';
import { QuickPickItem } from "vscode";

import * as _ from 'lodash';
// 处理请求结果数据
export default function ProcessingTranslationResults (res: TranslateResult): QuickPickItem[] {
  let result: string[] = [];
  if (res.dict) {
    result.push(...res.dict);
  }
  if (res.result) {
    result.push(res.result[0]);
  }
  return result.reverse().map(label => <QuickPickItem>{ label });
}