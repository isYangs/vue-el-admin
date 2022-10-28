import { createRouter, createWebHashHistory } from 'vue-router';
import { MenuRouteRecordRaw } from '@/types/menu';

const routes: Array<MenuRouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
        hidden: true,
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/Login/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        redirect: '/dashboard/index',
        component: () => import('@/layout/Index.vue'),
        children: [
            {
                path: 'index',
                name: 'Index',
                meta: {
                    title: '仪表盘',
                    icon: 'Odometer',
                },
                component: () => import('@/views/Dashboard/Index.vue'),
            },
        ],
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: {
            title: '系统设置',
            icon: 'Setting',
        },
        component: () => import('@/layout/Index.vue'),
        children: [
            {
                path: 'site',
                name: 'Site',
                meta: {
                    title: '网站设置',
                    icon: 'Location',
                },
                component: () => import('@/views/Settings/Site.vue'),
            },
            {
                path: 'pages',
                name: 'Pages',
                meta: {
                    title: '页面设置',
                    icon: 'Document',
                },
                component: () => import('@/views/Settings/Pages.vue'),
            },
            {
                path: 'theme',
                name: 'Theme',
                meta: {
                    title: '主题设置',
                    svgIcon: 'color',
                },
                component: () => import('@/views/Settings/Theme.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
