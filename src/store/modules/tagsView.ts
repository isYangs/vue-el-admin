import { defineStore } from 'pinia';
import { TagsViewState, TagsMenuProps } from '@/store/interface';

export const useTagsViewStore = defineStore('tagsView', {
    state: (): TagsViewState => ({
        TagsList: [],
    }),

    getters: {
        getTagsList(): TagsMenuProps[] {
            return this.TagsList;
        },
    },

    actions: {
        addTag(tag: TagsMenuProps) {
            const isSame = this.TagsList.some(item => item.path === tag.path);
            if (!isSame) {
                this.TagsList.push(tag);
            }
        },
        delTag(tagName: string) {
            const index = this.TagsList.findIndex(
                item => item.path === tagName
            );
            this.TagsList.splice(index, 1);
        },
        delLeftTag(tagName: string) {
            const index = this.TagsList.findIndex(
                item => item.path === tagName
            );
            this.TagsList.splice(0, index);
        },
        delRightTag(tagName: string) {
            const index = this.TagsList.findIndex(
                item => item.path === tagName
            );
            this.TagsList.splice(index + 1);
        },
        delAllTag(tagName: string) {
            this.delLeftTag(tagName);
            this.delRightTag(tagName);
        },
    },
});
