import Vue from 'vue'
import axios from 'axios'
import $store from '@/store'

// axios配置

// 设置默认路径
axios.defaults.baseURL = process.env.NODE_ENV === 'production'?
                         '/demo/nui-vue/index.php'
                         :'http://localhost/index.php'

// 设置报头
axios.defaults.headers = {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
}

// 设置 http request 拦截器，添加 token 信息
axios.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      // 判断是否是上传到图库
      if ( config.headers['Content-Type'] !== 'application/octet-stream') {
        config.headers.Authorization = `token ${localStorage.token}`
      }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    $store.commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
    return Promise.reject(error);
  }
)

export default axios