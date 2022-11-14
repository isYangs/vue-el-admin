import { createRouter, createWebHashHistory } from 'vue-router';
import { MenuRouteRecordRaw } from '@/types';

export const routes: Array<MenuRouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/Login/Login.vue'),
    },
];

export const asyncRoutes: Array<MenuRouteRecordRaw> = [
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
        redirect: '/settings/site',
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
    {
        path: '/manage',
        name: 'Manage',
        meta: {
            title: '系统管理',
            icon: 'SuitcaseLine',
        },
        redirect: '/settings/site',
        component: () => import('@/layout/Index.vue'),
        children: [
            {
                path: 'users',
                name: 'Users',
                meta: {
                    title: '用户管理',
                    icon: 'User',
                },
                component: () => import('@/views/Manage/Users.vue'),
            },
            {
                path: 'permissions',
                name: 'Permissions',
                meta: {
                    title: '权限管理',
                    icon: 'Files',
                },
                component: () => import('@/views/Manage/Permissions.vue'),
            },
            {
                path: 'roles',
                name: 'Roles',
                meta: {
                    title: '角色管理',
                    icon: 'Avatar',
                },
                component: () => import('@/views/Manage/Roles.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
