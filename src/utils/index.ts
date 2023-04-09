import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv();
  const yamlPath = join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = readFileSync(yamlPath, 'utf8');
  return parse(file);
};
