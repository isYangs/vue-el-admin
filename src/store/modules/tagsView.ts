import { defineStore } from 'pinia';
import { RouteLocationMatched } from 'vue-router';

export interface TagsViewState {
    currentView: RouteLocationMatched[];
}

export const useTagsViewStore = defineStore('tagsView', {
    state: (): TagsViewState => ({
        currentView: [], // 当前打开的页面
    }),

    getters: {
        getCurrentView(): RouteLocationMatched[] {
            return this.currentView;
        },
    },

    actions: {
        addCurrentView(view: RouteLocationMatched[]): void {
            if (view.length > 1) {
                this.addTagsView(view.slice(-1));
            } else {
                this.addTagsView(view);
            }
        },
        addTagsView(view: RouteLocationMatched[]): void {
            // 避免重复添加
            if (this.currentView.some(v => v.path === view[0].path)) return;
            this.currentView.push(...view);
        },
    },
});
