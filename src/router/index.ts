import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout/Index.vue';

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
        component: () => import('@/views/Login/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            title: '控制台',
            icon: 'Odometer',
        },
        redirect: '/dashboard/index',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Index',
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
        component: Layout,
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
