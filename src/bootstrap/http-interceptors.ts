import axios, { AxiosRequestConfig } from 'axios';
import { appStore } from '../stores';

axios.defaults.baseURL = '/';
// token 验证, 需要的话自行打开注释
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 添加请求拦截器
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log('%c request config', 'font-size:21pt;color:green', config);
        // 发送请求之前做的事情
        if (config.loading === true) {
            appStore.updateReqCount(1);
            console.log('request:::count:::', appStore.reqCount);
        }
        return config;
    },
    error => {
        console.log('%c request error', 'font-size:21pt;color:red', error);
        // 对请求错误处理
        appStore.updateReqCount(-1);
        return Promise.reject(error);
    }
);

/**
 * 后端返回的数据格式
 * {
 *   code: 0,
 *   msg: '这是一条成功的消息, code为0, 其他code根据需求自定义',
 *   data: {...}
 * }
 */
// 添加响应拦截器
axios.interceptors.response.use(
    res => {
        console.log('%c response res', 'font-size:21pt;color:blue', res);
        // 对响应数据处理
        if (res && res.config && res.config.loading === true) {
            appStore.updateReqCount(-1);
        }
        const result = res.data;
        if (result.hasOwnProperty('code') && result.code !== 0) {
            // 根据需求自定义错误码, 统一处理
        }
        return result.data;
    },
    error => {
        console.log('%c response error', 'font-size:21pt;color:red', error);
        // 对响应错误处理
        appStore.updateReqCount(-1);
        console.log('response:::count:::', appStore.reqCount);
        return Promise.reject(error);
    }
);

const handleError = error => {
    if (error instanceof Error) {
        console.log('[ERROR]:', error);
    }
};
