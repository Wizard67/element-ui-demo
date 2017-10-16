import Vue from 'vue'
import axios from 'axios'

// 设置报头
axios.defaults.headers = {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
}

// 设置 http request 拦截器
axios.interceptors.request.use(
  (config) => {

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
    return Promise.reject(error);
  }
)

export default axios