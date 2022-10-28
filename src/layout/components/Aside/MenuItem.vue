<script setup lang="ts">
import { useRouter } from 'vue-router';
import { MenuRouteRecordRaw } from '@/types/menu';

defineProps(['routers']);
const router = useRouter();
const toPath = (path: string) => {
    router.push({ name: path });
};

const hasOnlyChild = (children: MenuRouteRecordRaw[]) => {
    if (!children) return false;
    // 过滤掉hidden
    const childRouter = children.filter(item => item.meta?.hidden !== true);
    if (childRouter.length === 1) return true;
    return false;
};
</script>

<template>
    <template v-for="item in routers" :key="item.path">
        <template v-if="!item.hidden">
            <el-sub-menu
                v-if="item.children && item.children.length > 1"
                :index="item.path"
            >
                <template #title>
                    <template v-if="item.meta?.icon">
                        <el-icon>
                            <component :is="item.meta?.icon" />
                        </el-icon>
                    </template>
                    <template v-if="item.meta?.svgIcon">
                        <Icon
                            :name="item.meta?.svgIcon"
                            :type="false"
                            :size="18"
                        />
                    </template>
                    <span>{{ item.meta?.title }}</span>
                </template>
                <MenuItem :routers="item.children" />
            </el-sub-menu>

            <template v-else-if="hasOnlyChild(item.children)">
                <el-menu-item
                    :index="item.children[0].path"
                    @click="toPath(item.children[0].name)"
                >
                    <template v-if="item.children[0].meta?.icon">
                        <el-icon>
                            <component :is="item.children[0].meta?.icon" />
                        </el-icon>
                    </template>
                    <template v-if="item.children[0].meta?.svgIcon">
                        <Icon
                            :name="item.meta?.svgIcon"
                            :type="false"
                            :size="18"
                        />
                    </template>
                    <span>{{ item.children[0].meta?.title }}</span>
                </el-menu-item>
            </template>

            <el-menu-item v-else :index="item.path" @click="toPath(item.name)">
                <template v-if="item.meta?.icon">
                    <el-icon>
                        <component :is="item.meta?.icon" />
                    </el-icon>
                </template>
                <template v-if="item.meta?.svgIcon">
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
