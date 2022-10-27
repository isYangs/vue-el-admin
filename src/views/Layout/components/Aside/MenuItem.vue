<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps(['routers']);
const router = useRouter();
const toPath = (path: string) => {
    router.push({ name: path });
};
</script>
<template>
    <template v-for="item in routers" :key="item.path">
        <template v-if="!item.meta.hidden">
            <el-sub-menu
                v-if="item.children && item.children.length > 1"
                :index="item.path"
            >
                <template #title>
                    <template v-if="item.meta.icon">
                        <el-icon>
                            <component :is="item.meta?.icon" />
                        </el-icon>
                    </template>
                    <template v-if="item.meta.svgIcon">
                        <Icon :name="item.meta?.svgIcon" :type="false" />
                    </template>
                    <span>{{ item.meta?.title }}</span>
                </template>
                <MenuItem :routers="item.children" />
            </el-sub-menu>
            <el-menu-item v-else :index="item.path" @click="toPath(item.name)">
                <template v-if="item.meta.icon">
                    <el-icon>
                        <component :is="item.meta?.icon" />
                    </el-icon>
                </template>
                <template v-if="item.meta.svgIcon">
                    <Icon :name="item.meta?.svgIcon" :type="false" :size="18" />
                </template>
                <span>{{ item.meta?.title }}</span>
            </el-menu-item>
        </template>
    </template>
</template>

<style scoped lang="less">
:deep(.el-menu--inline) {
    background-color: #304156;
}
</style>
