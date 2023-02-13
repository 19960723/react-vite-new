import { BASE_RUL } from '@/constant';
import HttpRequest from './axios';

const axios = new HttpRequest(BASE_RUL);

export default axios;
