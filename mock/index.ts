import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return 'hello world and get mockData';
    },
  },
] as MockMethod[];
