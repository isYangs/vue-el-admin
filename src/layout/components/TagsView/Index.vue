<script lang="ts" setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useAppStore, useTagsViewStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { TagsMenuProps } from '@/store/interface';

const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const route = useRoute();
const { push } = useRouter();

const isMobile = computed(() => {
    return appStore.getMobile;
});

const tagsList = computed(() => {
    return tagsViewStore.getTagsList;
});

const isClose = computed(() => {
    if (tagsList.value.length === 1) return false;
    return true;
});

const activeTag = ref('');

// 添加标签
const addTag = () => {
    const { path, meta } = route;
    tagsViewStore.addTag({
        path,
        title: meta.title as string,
    });
};

// 点击标签路由跳转
const tagClick = (tag: any) => {
    push({ path: tag.props.name });
};

//  删除标签
const tagRemove = (tagName: string) => {
    if (isClose.value) {
        if (tagName === activeTag.value) {
            tagsList.value.forEach((item, index) => {
                if (item.path === tagName) {
                    const nextTag =
                        tagsList.value[index + 1] || tagsList.value[index - 1];
                    if (nextTag) {
                        activeTag.value = nextTag.path;
                        push({ path: nextTag.path });
                    }
                }
            });
        }
        tagsViewStore.delTag(tagName);
    }
};

// 刷新缓存标签数据
const refreshTags = () => {
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem(
            'VEA_TAGS_ROUTES',
            JSON.stringify(tagsList.value)
        );
    });

    let sessionTags = sessionStorage.getItem('VEA_TAGS_ROUTES');

    if (sessionTags) {
        const tagItem = JSON.parse(sessionTags);
        tagItem.forEach((item: TagsMenuProps) => {
            tagsViewStore.addTag(item);
        });
    }
};

watch(
    () => route.path,
    () => {
        activeTag.value = route.path;
        addTag();
    }
);

onMounted(() => {
    refreshTags();
    addTag();
    activeTag.value = route.path;
});
</script>

<template>
    <div class="layout-tags-view">
        <div v-show="!isMobile" class="scrollbar-btn">
            <el-icon><DArrowLeft /></el-icon>
        </div>
        <el-tabs
            v-model="activeTag"
            type="card"
            @tab-click="tagClick"
            @tab-remove="tagRemove"
        >
            <el-tab-pane
                v-for="item in tagsList"
                :key="item.path"
                :label="item.title"
                :name="item.path"
                :closable="isClose"
            />
        </el-tabs>
        <div v-show="!isMobile" class="scrollbar-btn">
            <el-icon><DArrowRight /></el-icon>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout-tags-view {
    display: flex;
    align-items: center;
    height: 100%;
    & > .scrollbar-btn {
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        cursor: pointer;
        border: solid 1px #eee;
        border-radius: 5px;
        transition: all 0.35s;
        -webkit-transition: all 0.35s;
        -moz-transition: all 0.35s;
        -o-transition: all 0.35s;

        &:hover {
            background-color: #eee;
        }
    }
}
:deep(.el-tabs) {
    flex: 1;
    overflow: hidden;
    &__header {
        margin: 0;
        border: none;
        .el-tabs__nav {
            border: none;
            .el-tabs__item {
                height: 100%;
                border-radius: 3px;
                cursor: pointer;
                margin-right: 5px;
                padding-right: 15px !important;
                transition: all 0.3s;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                -o-transition: all 0.3s;
                border: none;

                &.is-active:not(.is-closable) {
                    padding-right: 20px !important;
                }
                &.is-active {
                    background: @--bg-tags-active;
                    color: @--text-color;
                }
            }
        }
    }
}
</style>
