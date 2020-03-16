import { TranslateResult } from './interface';

import * as _ from 'lodash';

// 处理请求结果数据
export default function ProcessingTranslationResults (res: TranslateResult): string[] {
  let result: string[] = [];
  if (res.dict) {
    result.push(...res.dict);
  }
  if (res.result) {
    result.push(res.result[0]);
  }
  result.reverse();
  // result = result.map(item => item.replace(/\[.*?\] /g,''));
  // result = _.uniq(result).filter(item => !_.isEmpty(item));
  return result;
}