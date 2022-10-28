<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
import { Ref, ref, watch } from 'vue';

const route = useRoute();
console.log(route);
const breadcrumb: Ref<RouteLocationMatched[]> = ref([]);

const getBreadcrumb = () => {
    // 过滤掉不需要显示的路由
    const matched = route.matched.filter(
        item => item.meta?.breadcrumb !== false
    );
};
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
            <el-breadcrumb-item :to="{ path: '/' }">
                homepage
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="less"></style>
