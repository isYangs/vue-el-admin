import { defineStore } from 'pinia';
import { AppState } from '@/store/interface';
import { iconsole } from '@/api';
import { Storage, Constants } from '@/utils/storage';

const userInfo = Storage.get(Constants.USER_INFO);
const projectLang = Storage.get(Constants.PROJECT_LANG, 'session');

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        collapse: true, // 折叠菜单
        mobile: false, // 是否是移动端
        loading: false, // 全局加载状态
        avatar: userInfo ? userInfo.value.avatar : '', // 用户头像
        lang: projectLang ? projectLang : [], // 本项目使用的语言
        reload: false, // 是否重载页面
    }),

    getters: {
        getCollapse(): boolean {
            return this.collapse;
        },
        getMobile(): boolean {
            return this.mobile;
        },
        getLoading(): boolean {
            return this.loading;
        },
        getAvatar(): string {
            return this.avatar;
        },
        getLang(): { [key: string]: string }[] {
            return this.lang;
        },
        getReload(): boolean {
            return this.reload;
        },
    },

    actions: {
        async addLang() {
            const lang = Storage.get(Constants.PROJECT_LANG, 'session');
            if (!lang) {
                const r = await iconsole.getLang();
                const d = [];
                for (const key in r.data) {
                    if (this.lang.some(item => item.name === key)) return;
                    d.push({
                        name: key,
                        value: r.data[key],
                    });
                }
                Storage.set(Constants.PROJECT_LANG, d, 'session');
                this.lang = d;
                console.log(d);
            }
            this.lang = lang;
        },
        addAvatar() {},
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        },
        setMobile(mobile: boolean): void {
            this.mobile = mobile;
        },
        setLoading(loading: boolean): void {
            this.loading = loading;
        },
        setAvatar(avatar: string): void {
            this.avatar = avatar;
        },
        reloadPage(): void {
            this.reload = true;
            setTimeout(() => {
                this.reload = false;
            }, 100);
        },
    },
});
