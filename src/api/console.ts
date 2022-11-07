import base from './base';
import axios from '../utils/request';

const console = {
    // 获取语言
    getLang() {
        return axios.get(base.lang);
    },
};

export default console;
