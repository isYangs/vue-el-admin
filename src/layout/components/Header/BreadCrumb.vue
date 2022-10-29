<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
import { Ref, ref, watch } from 'vue';

const route = useRoute();
const breadcrumb: Ref<RouteLocationMatched[]> = ref([]);

const getBreadcrumb = () => {
    // 过滤掉不需要显示的路由
    breadcrumb.value = route.matched.filter(
        item => item.meta && item.meta?.title && item.children.length !== 1
    );
};
getBreadcrumb();
watch(
    () => route.path,
    () => {
        getBreadcrumb();
    }
);
</script>

<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item
                v-for="(item, index) in breadcrumb"
                :key="index"
                :to="item.path"
            >
                <template v-if="item.redirect">
                    <el-icon v-if="item.meta.icon">
                        <component :is="item.meta.icon" />
                    </el-icon>
                    <Icon
                        v-else
                        :name="item.meta?.svgIcon"
                        :type="false"
                        :size="15"
                        color="#000"
                    />
                </template>
                <span>{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="less">
.el-breadcrumb {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;

    .el-icon {
        margin-right: 5px;
    }
}

:deep(.el-breadcrumb__inner.is-link) {
    display: flex;
    align-items: center;
}
</style>
