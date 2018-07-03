import * as apiConfig from './config';

const ajax = (api, params) =>
  apiConfig[api]
    ? apiConfig[api](params)
    : console.error(`[API] ${api} not exist`);

export default ajax;
