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
    },
});
