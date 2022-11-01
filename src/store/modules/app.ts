import { defineStore } from 'pinia';
import { AppState } from '@/store/interface';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        collapse: false, // 折叠菜单按钮
    }),

    getters: {
        getCollapse(): boolean {
            return this.collapse;
        },
    },

    actions: {
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        },
    },
});
