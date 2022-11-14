import { MenuRouteRecordRaw } from '@/types';
export interface AppState {
    collapse: boolean;
    mobile: boolean;
    loading: boolean;
    avatar: string;
    lang: { [key: string]: string }[];
    reload: boolean;
}

export interface TagsMenuProps {
    path: string;
    title: string;
}

export interface TagsViewState {
    TagsList: TagsMenuProps[];
}

export interface AuthState {
    token: string;
    isLogin: boolean;
}

export interface MenuState {
    router: MenuRouteRecordRaw[];
}
