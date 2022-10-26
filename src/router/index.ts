import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
        meta: { hidden: true },
    },
    {
        path: '/login',
        name: 'Login',
        meta: { hidden: true },
        component: () => import('../views/Login/Login.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
            icon: 'HomeFilled',
        },
        component: () => import('../views/Dashboard/Index.vue'),
    },
    {
        path: '/setting',
        name: 'Settings',
        meta: {
            title: '系统设置',
            icon: 'Setting',
        },
        component: () => import('../views/Dashboard/Index.vue'),
        children: [
            {
                path: '/department',
                name: 'Department',
                meta: {
                    title: '部门管理',
                    icon: 'Briefcase',
                },
                component: () => import('../views/Dashboard/Index.vue'),
            },
            {
                path: '/user',
                name: 'User',
                meta: {
                    title: '用户管理',
                    icon: 'UserFilled',
                },
                component: () => import('../views/Dashboard/Index.vue'),
            },
            {
                path: '/role',
                name: 'Role',
                meta: {
                    title: '角色管理',
                    icon: 'Postcard',
                },
                component: () => import('../views/Dashboard/Index.vue'),
            },
            {
                path: '/permissions',
                name: 'Permissions',
                meta: {
                    title: '权限管理',
                    icon: 'Promotion',
                },
                component: () => import('../views/Dashboard/Index.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
