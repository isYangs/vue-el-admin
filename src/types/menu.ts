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
    } & IconOrSvgIcon;
    children?: MenuRouteRecordRaw[];
};
