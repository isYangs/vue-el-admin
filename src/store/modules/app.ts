import { defineStore } from 'pinia';
import { AppState } from '@/store/interface';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        collapse: false, // 折叠菜单按钮
        mobile: false, // 是否是移动端
    }),

    getters: {
        getCollapse(): boolean {
            return this.collapse;
        },
        getMobile(): boolean {
            return this.mobile;
        },
    },

    actions: {
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        },
        setMobile(mobile: boolean): void {
            this.mobile = mobile;
        },
    },
});
