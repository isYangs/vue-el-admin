<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
import { Ref, ref, watchEffect } from 'vue';

const route = useRoute();
const breadcrumb: Ref<RouteLocationMatched[]> = ref([]);

// 获取面包屑
const getBreadcrumb = () => {
    const matched = route.matched.filter(
        item => item.meta && item.meta?.title && item.children.length !== 1
    );
    breadcrumb.value = matched;
};

getBreadcrumb();

watchEffect(() => {
    getBreadcrumb();
});
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
                    <span style="font-weight: 600">{{ item.meta.title }}</span>
                </template>
                <span v-else>{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="less">
.el-breadcrumb {
    width: 100%;
    height: 100%;
    margin-right: auto;
    flex: 1;
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
