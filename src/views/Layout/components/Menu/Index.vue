<script setup lang="ts">
import { useAppStore } from '@/store';
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const { options } = useRouter();
const routers = options.routes;
</script>

<template>
    <el-menu
        default-active="/home"
        active-text-color="#ffd04b"
        background-color="#283145"
        text-color="#fff"
        :collapse="appStore.getCollapse"
        :collapse-transition="false"
        unique-opened
    >
        <MenuItem :routers="routers" />
    </el-menu>
</template>

<style lang="less">
.el-menu {
    border: none;
    background-color: @--bg-aside;
    flex: 1;
}
</style>
