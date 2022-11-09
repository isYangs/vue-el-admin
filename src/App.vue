<script lang="ts" setup>
import { watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useAppStore } from '@/store';
import { isMobile } from '@/utils/isMobile';

const { width } = useWindowSize();
const appStore = useAppStore();

// 监听窗口大小
const isMobileShow = () => {
    appStore.setCollapse(!isMobile());
    appStore.setMobile(isMobile());
};

watch(
    () => width.value,
    () => {
        isMobileShow();
    }
);

isMobileShow();
</script>

<template>
    <router-view />
</template>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: var(--el-font-family);
    background: @--bg;
}
</style>
