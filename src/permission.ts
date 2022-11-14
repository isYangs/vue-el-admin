import router, { asyncRoutes } from '@/router';
import { Storage, Constants } from '@/utils/storage';
import { ElMessage } from 'element-plus';

// 定义标识，是否已经添加过动态路由
let hasAddRoutes = false;

router.beforeEach((to, from, next) => {
    const user = Storage.get(Constants.USER_INFO);
    if (!user) {
        console.log('没有登录');
        if (to.path === '/login') {
            next();
        } else {
            ElMessage.error('请先登录');
            next('/login');
        }
    } else {
        if (to.path === '/login') {
            next('/dashboard');
        } else {
            if (!hasAddRoutes) {
                asyncRoutes.forEach(item => {
                    router.addRoute(item);
                });
                next({ ...to, replace: true });
                hasAddRoutes = true;
            } else {
                next();
            }
        }
    }
});
