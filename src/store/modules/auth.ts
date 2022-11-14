import { defineStore } from 'pinia';
import { LoginForm } from '@/types';
import { user } from '@/api';
import { Storage, Constants } from '@/utils/storage';
import { AuthState } from '@/store/interface';
import { asyncRoutes } from '@/router';

const storage = Storage.get(Constants.USER_INFO);
export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: storage ? storage.value.user_token : '', // 用户token,
        isLogin: storage ? true : false, // 是否登录
    }),
    getters: {
        getToken(): string {
            return this.token;
        },
        getIsLogin(): boolean {
            return this.isLogin;
        },
    },
    actions: {
        async login(data: LoginForm, callback: () => void) {
            const res = await user.login(data);
            if (res.data.code === 200) {
                this.setIsLogin(true);
                Storage.set(Constants.USER_INFO, res.data.data);
                Storage.set(Constants.USER_MENU, asyncRoutes);
                this.setToken(res.data.data.user_token);
                callback();
                ElMessage({
                    message: res.data.msg,
                    type: 'success',
                    center: true,
                });
                return res.data.data;
            } else {
                this.setIsLogin(false);
                ElMessage({
                    message: res.data.msg,
                    type: 'error',
                    center: true,
                });
                return res.data;
            }
        },
        setToken(token: string): void {
            this.token = token;
        },
        setIsLogin(isLogin: boolean): void {
            this.isLogin = isLogin;
        },
    },
});
