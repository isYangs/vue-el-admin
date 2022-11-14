import base from './base';
import request from '../utils/request';

const data = {
    // 获取用户管理页面数据
    getUserList(data: object) {
        return request({
            url: `${base.base}/data/userList`,
            method: 'post',
            data,
        });
    },
};

export default data;
