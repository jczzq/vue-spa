require('es6-promise').polyfill();
import axios from 'axios';
axios.defaults.timeout = 15000;

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在请求发出之前进行一些操作
    return config;
}, function (err) {
    // 请求错误拦截;
    return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(function (res) {
    // 在这里对返回的数据进行处理
    return res;
}, function (err) {
    // 响应错误拦截
    switch (err.status) {
        case 401:
            console.log(err.response.status);
            break;
        case 403:
            console.log(err.response.status);
            break;
        default:
            console.log(err.response.status);
            break;
    }
    return Promise.reject(err);
});

export default function(url, method, data) {
    return axios.request({
        url: url,
        method: method || 'GET',
        params: data
    });
};
