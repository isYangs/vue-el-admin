export interface AppState {
    collapse: boolean;
    mobile: boolean;
    avatar: string;
}

export interface TagsMenuProps {
    path: string;
    title: string;
}

export interface TagsViewState {
    TagsList: TagsMenuProps[];
}
