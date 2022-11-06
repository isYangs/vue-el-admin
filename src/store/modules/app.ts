import { defineStore } from 'pinia';
import { AppState } from '@/store/interface';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        collapse: false, // 折叠菜单按钮
        mobile: false, // 是否是移动端
        avatar: 'https://a.xuewuzhibu.cn/1/62ffa32495bbf-1.jpg', // 头像
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
    },

    actions: {
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        },
        setMobile(mobile: boolean): void {
            this.mobile = mobile;
        },
        setAvatar(avatar: string): void {
            this.avatar = avatar;
        },
    },
});
