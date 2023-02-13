import axios from '@/utils/request';
import qs from 'qs';

export const getUserDetail = (params: any) => axios.get('/api/getUserInfo?' + qs.stringify(params));
