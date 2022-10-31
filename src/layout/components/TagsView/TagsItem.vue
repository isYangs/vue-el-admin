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
        <transition-group
            name="layoutTagsViewItems"
            enter-active-class="animate__animated animate__bounceInRight"
            leave-active-class="animate__animated animate__bounceOut"
        >
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
        </transition-group>
    </div>
</template>

<style scoped lang="less">
.layoutTagsViewItems {
    &-enter-active {
        animation-duration: 0.5s;
    }
    &-leave-active {
        animation-duration: 0.5s;
    }
}
.layout-tags-view-items__item {
    height: 100%;
    padding: 0 15px;
    min-width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;

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
        transition: width 0.5s;
        -webkit-transition: width 0.5s;
        -moz-transition: width 0.5s;
        -o-transition: width 0.5s;

        &:hover {
            color: @--text-color;
            background: @--text-color-placeholder;
        }
    }
}
</style>
