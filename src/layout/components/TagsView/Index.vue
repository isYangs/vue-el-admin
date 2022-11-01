<template>
    <el-tabs v-model="activeTag" type="card">
        <el-tab-pane
            v-for="item in tagsList"
            :key="item.path"
            :label="item.title"
            :name="item.path"
        >
            {{ item.title }}
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { useTagsViewStore } from '@/store';
import { useRoute } from 'vue-router';

const tagsViewStore = useTagsViewStore();
const route = useRoute();

const tagsList = computed(() => {
    return tagsViewStore.getTagsList;
});

const activeTag = ref('');

const addTag = () => {
    const { path, meta } = route;
    tagsViewStore.addTag({
        path,
        title: meta.title as string,
    });
};

watch(
    () => route.path,
    () => {
        activeTag.value = route.path;
        addTag();
    }
);
</script>
<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
