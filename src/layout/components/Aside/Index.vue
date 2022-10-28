<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store';
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const { options, currentRoute } = useRouter();
const routers = options.routes;
const defaultActive = ['/settings'];
const activeMenu = computed(() => {
    let path = currentRoute.value.path;
    // 截取出二级路由的path
    path = path.split('/')[2];
    return path;
});
</script>

<template>
    <el-menu
        active-text-color="#ffffff"
        background-color="#283145"
        text-color="#fff"
        :collapse="appStore.getCollapse"
        :collapse-transition="false"
        :default-active="activeMenu"
        :default-openeds="defaultActive"
    >
        <MenuItem :routers="routers" />
    </el-menu>
</template>

<style lang="less">
.el-menu {
    border: none;
    background-color: @--bg-aside;
    flex: 1;

    .is-active {
        background-color: @--bg-aside-active;

        .el-sub-menu__title {
            background-color: @--bg-aside-is-opened !important;
        }
    }
    .is-opened {
        .el-sub-menu__title {
            background-color: @--bg-aside-is-opened !important;
        }
    }
}
</style>
