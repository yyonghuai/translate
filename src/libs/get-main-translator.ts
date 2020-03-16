import * as Translate from 'translation.js';
import { workspace } from "vscode";

// 通过用户配置，设置翻译提供商
let config: keyof typeof Translate = workspace.getConfiguration('x-translator').type;
export default Translate[config];
