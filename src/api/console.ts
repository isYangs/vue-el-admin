import base from './base';
import request from '../utils/request';

const console = {
    // 获取语言
    getLang() {
        return request(`${base.gh}/languages`);
    },
};

export default console;
