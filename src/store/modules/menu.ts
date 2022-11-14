import { defineStore } from 'pinia';
import { MenuRouteRecordRaw } from '@/types';
import { MenuState } from '@/store/interface';
import { Storage, Constants } from '@/utils/storage';

const userMenu = Storage.get(Constants.USER_MENU);
export const useMenuStore = defineStore('menu', {
    state: (): MenuState => ({
        router: userMenu ? userMenu.value : [], // 存储动态路由信息
    }),
    getters: {
        getRouter(): MenuRouteRecordRaw[] {
            return this.router;
        },
    },
    actions: {
        setRouter(router: MenuRouteRecordRaw[]): void {
            this.router = router;
        },
    },
});
