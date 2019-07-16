"use strict";

import Vue from 'vue';
import axios from "axios";
import store from './../store'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.headers.common['Authorization'] = 'sas';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL: '/api',
  timeout: 10 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// 定义一个请求拦截器
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent 
    store.state.isShow = true; //在请求发出之前进行一些操作
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor 定义一个响应拦截器
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    store.state.isShow = false;//在这里对返回的数据进行处理
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
