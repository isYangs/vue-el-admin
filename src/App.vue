<script lang="ts" setup>
import { watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useAppStore } from '@/store';
import { isMobile } from '@/utils/isMobile';

const { width } = useWindowSize();
const appStore = useAppStore();

watch(
    () => width.value,
    () => {
        appStore.setCollapse(isMobile());
        appStore.setMobile(isMobile());
    }
);
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
