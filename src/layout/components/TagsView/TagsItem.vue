<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router';
import { Close } from '@element-plus/icons-vue';
import { useTagsViewStore } from '@/store';

const tagsViewStore = useTagsViewStore();

let tagsView = tagsViewStore.getCurrentView;
const route = useRoute();
const router = useRouter();
console.log(router);

const isActive = (rou: RouteLocationMatched) => {
    return rou.path === route.path;
};

watchEffect(() => {
    tagsView = tagsViewStore.getCurrentView;
});
</script>

<template>
    <div class="layout-tags-view-items">
        <div
            v-for="item in tagsView"
            :key="item.path"
            class="layout-tags-view-items__item"
            :class="isActive(item) ? 'active' : ''"
            @click="() => router.push(item.path)"
        >
            <span>{{ item.meta.title }}</span>
            <el-icon class="layout-tags-view-items__item__close">
                <component :is="Close" />
            </el-icon>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout-tags-view-items__item {
    height: 100%;
    padding: 0 15px;
    min-width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.35s;
    -webkit-transition: all 0.35s;
    -moz-transition: all 0.35s;
    -o-transition: all 0.35s;

    & > span {
        margin-left: 5px;
    }
    &.active {
        color: @--text-color;
        background-color: @--bg-tags-active;
    }
    &.active > .layout-tags-view-items__item__close {
        width: 14px;
    }
    &.active:hover {
        color: @--text-color;
    }

    &:hover {
        color: @--text-color-active;
    }

    &:hover .layout-tags-view-items__item__close {
        width: 14px;
    }
    & > .layout-tags-view-items__item__close {
        width: 0;
        height: 14px;
        line-height: 15px;
        margin-left: 5px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.35s;

        &:hover {
            color: @--text-color;
            background: @--text-color-placeholder;
        }
    }
}
</style>
