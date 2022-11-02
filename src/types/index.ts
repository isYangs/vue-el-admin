import { Ref } from 'vue';

import { RouteRecordRaw } from 'vue-router';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;

type IconOrSvgIcon = XOR<{ icon: string }, { svgIcon?: string }>;

export type MenuRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean;
    meta?: {
        title: string;
        close?: boolean;
    } & IconOrSvgIcon;
    children?: MenuRouteRecordRaw[];
};

export type LoginForm = {
    username: string;
    password: string;
    confirmPassword?: string;
    phone?: string;
    code?: number | Ref<number>;
    codeMin?: number | Ref<number>;
    codeMax?: number | Ref<number>;
};
