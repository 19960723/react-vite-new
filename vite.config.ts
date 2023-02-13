import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock', //mock文件路径，在根路径下创建一个mock文件
      localEnabled: true, //mock开关
      prodEnabled: false, //生产环境下为false，这样就不会被打包到生产包中
      ignore: /^\\_/, //忽略开始_路径
    }),
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
});
