export interface AppState {
    collapse: boolean;
    mobile: boolean;
    loading: boolean;
    avatar: string;
    lang: { [key: string]: string }[];
}

export interface TagsMenuProps {
    path: string;
    title: string;
}

export interface TagsViewState {
    TagsList: TagsMenuProps[];
}
