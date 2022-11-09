import axios from 'axios';
import { ElMessage } from 'element-plus';
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types';

const tip = (
    msg: string,
    type: EpPropMergeType<
        StringConstructor,
        'success' | 'warning' | 'info' | 'error',
        unknown
    > = 'error'
) => {
    ElMessage({
        message: msg,
        duration: 5 * 1000,
        center: true,
        type,
    });
};

/**
 * 请求失败后的错误统一处理
 * @param {number} status 请求状态码
 * @param {DataView} other 其他信息
 */

const errorHandler = (status: number, other: DataView) => {
    switch (status) {
        case 401:
            tip('登录状态失效，请重新登录');
            break;
        case 403:
            tip('拒绝访问');
            break;
        case 404:
            tip('请求地址出错');
            break;
        default:
            console.log(other);
    }
};

const service = axios.create({
    timeout: 10000 * 12,
});

// Request interceptors
service.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptors
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    },
    error => {
        if (error.response) {
            errorHandler(error.response.status, error.response.data);
            return Promise.reject(error.response);
        } else {
            console.log('Error', error.message);
        }
    }
);

export default service;
