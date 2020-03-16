import { QuickPickItem } from "vscode";
import * as _ from 'lodash';
import Translator from './get-main-translator';
import { TranslateResult } from './interface';

// 为每一项进行翻译
export default async function twiceTranslate (data: string[]): Promise<QuickPickItem[]> {
  const result: QuickPickItem[] = data.map(label => <QuickPickItem>{ label });
  // const promises = result.map(async item => {
  //   await Translator.translate(item.label).then((res: TranslateResult) => {
  //     let detail: string = '';
  //     if (res.dict) {
  //       res.dict.filter(item => !_.isEmpty(item)).forEach(item => detail += `[ ${item} ] `);
  //     }
  //     item.description = res.result ? `【 ${res.result[0]} 】` : '';
  //     item.detail = detail;
  //   });
  // });
  // await Promise.all(promises);
  return result;
}
