import base from './base';
import request from '../utils/request';

const user = {
    // 登录
    login(data: object) {
        return request({
            url: `${base.base}/user/login`,
            method: 'post',
            data,
        });
    },
    // 退出登录
    logout() {
        return request(`${base.base}/user/logout`);
    },
    // 获取用户信息
    getUserInfo(data: object) {
        return request({
            url: `${base.base}/getUserInfo`,
            method: 'post',
            data,
        });
    },
};

export default user;
