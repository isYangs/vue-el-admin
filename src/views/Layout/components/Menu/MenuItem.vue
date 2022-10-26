<script setup lang="ts">
defineProps(['routers']);
</script>
<template>
    <template v-for="item in routers" :key="item.path">
        <el-menu-item v-if="!item.children" :index="item.path">
            <el-icon>
                <component :is="item.meta?.icon" />
            </el-icon>
            <span>{{ item.meta?.title }}</span>
        </el-menu-item>

        <el-sub-menu v-else :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta?.icon" />
                </el-icon>
                <span>{{ item.meta?.title }}</span>
            </template>
            <MenuItem :routers="item.children" />
        </el-sub-menu>
    </template>
</template>

<style scoped lang="less">
:deep(.el-menu--inline) {
    background-color: #304156;
}
</style>
