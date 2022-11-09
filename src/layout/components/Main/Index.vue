<script setup lang="ts">
import { useAppStore } from '@/store';
const appStore = useAppStore();
</script>

<template>
    <div class="layout-main">
        <router-view v-if="!appStore.getReload" />
    </div>
</template>

<style scoped lang="less">
.layout-main {
    height: 100%;
    background: @--bg-main;
}
</style>
