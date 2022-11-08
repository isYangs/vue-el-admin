import { defineStore } from 'pinia';
import { AppState } from '@/store/interface';
import { iconsole } from '@/api';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        collapse: false, // 折叠菜单按钮
        mobile: false, // 是否是移动端
        avatar: 'https://a.xuewuzhibu.cn/1/62ffa32495bbf-1.jpg', // 头像
        lang: [], // 本项目使用的语言
    }),

    getters: {
        getCollapse(): boolean {
            return this.collapse;
        },
        getMobile(): boolean {
            return this.mobile;
        },
        getAvatar(): string {
            return this.avatar;
        },
        getLang(): Object {
            return this.lang;
        },
    },

    actions: {
        async addLang() {
            // const res = await iconsole.getLang();
            // for (const key in res.data) {
            //     if (this.lang.some(item => item.name === key)) return;
            //     this.setLang(res.data, key);
            // }
        },
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        },
        setMobile(mobile: boolean): void {
            this.mobile = mobile;
        },
        setAvatar(avatar: string): void {
            this.avatar = avatar;
        },
        setLang(data: Object, key: string): void {
            // this.lang.push({
            //     value: data[key],
            //     name: key,
            // });
            console.log(data, key);
        },
    },
});
