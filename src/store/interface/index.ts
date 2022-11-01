export interface AppState {
    collapse: boolean;
}

export interface TagsMenuProps {
    path: string;
    title: string;
}

export interface TagsViewState {
    TagsList: TagsMenuProps[];
}
