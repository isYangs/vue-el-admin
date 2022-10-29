import { defineStore } from 'pinia';
import { RouteLocationMatched } from 'vue-router';

export interface TagsViewState {
    currentView: RouteLocationMatched[];
}

export const useTagsViewStore = defineStore('tagsView', {
    state: (): TagsViewState => ({
        currentView: [], // 当前打开的页面
    }),

    getters: {},

    actions: {
        addCurrentView(view: RouteLocationMatched[]): void {},
    },
});
