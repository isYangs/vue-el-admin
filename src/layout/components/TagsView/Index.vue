<script lang="ts" setup>
import { onMounted, unref, ref, watch, computed } from 'vue';
import { useAppStore, useTagsViewStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { TagsMenuProps } from '@/store/interface';
import {
    Operation,
    RefreshRight,
    CircleCloseFilled,
    ArrowLeftBold,
    ArrowRightBold,
    CloseBold,
} from '@element-plus/icons-vue';

const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const route = useRoute();
const { push } = useRouter();

// 是否为移动端
const isMobile = computed(() => {
    return appStore.getMobile;
});

const tagsList = computed(() => {
    return tagsViewStore.getTagsList;
});

// 能否关闭
const isClose = computed(() => {
    return tagsList.value.length === 1 ? false : true;
});

// 是否禁用关闭左侧
const isLeftClose = computed(() => {
    return tagsList.value.some((item, index) =>
        item.path === unref(activeTag) ? (index === 0 ? false : true) : false
    );
});

// 是否禁用关闭右侧
const isRightClose = computed(() => {
    return tagsList.value.some((item, index) =>
        item.path === unref(activeTag)
            ? index === tagsList.value.length - 1
                ? false
                : true
            : false
    );
});

// 当前激活的标签
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

//  关闭选中标签
const closeSelectedTag = (tagName: string) => {
    if (!isClose.value) return;
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
};

// 关闭左侧标签
const closeLeftTag = () => {
    if (!isLeftClose.value) return;
    tagsViewStore.delLeftTag(activeTag.value);
};

// 关闭右侧标签
const closeRightTag = () => {
    if (!isRightClose.value) return;
    tagsViewStore.delRightTag(activeTag.value);
};

// 关闭全部标签
const closeAllTag = () => {
    tagsViewStore.delAllTag(activeTag.value);
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
        <el-tabs
            v-model="activeTag"
            type="card"
            @tab-click="tagClick"
            @tab-remove="closeSelectedTag"
        >
            <el-tab-pane
                v-for="item in tagsList"
                :key="item.path"
                :label="item.title"
                :name="item.path"
                :closable="isClose"
            />
        </el-tabs>
        <el-dropdown trigger="click" class="context" v-show="!isMobile">
            <el-button type="primary" class="context-btn" :icon="Operation">
                更多功能
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :icon="RefreshRight">
                        重载页面
                    </el-dropdown-item>
                    <el-dropdown-item
                        :icon="CircleCloseFilled"
                        @click="closeSelectedTag(activeTag)"
                        :disabled="!isClose"
                    >
                        关闭当前
                    </el-dropdown-item>
                    <el-dropdown-item
                        :icon="ArrowLeftBold"
                        divided
                        @click="closeLeftTag"
                        :disabled="!isLeftClose"
                    >
                        关闭左侧
                    </el-dropdown-item>
                    <el-dropdown-item
                        :icon="ArrowRightBold"
                        @click="closeRightTag"
                        :disabled="!isRightClose"
                    >
                        关闭右侧
                    </el-dropdown-item>
                    <el-dropdown-item
                        :icon="CloseBold"
                        @click="closeAllTag"
                        divided
                        :disabled="!isClose"
                    >
                        关闭所有
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped lang="less">
.layout-tags-view {
    display: flex;
    align-items: center;
    height: 100%;

    .context {
        height: 100%;
        padding: 0 20px;
        border-left: 2px solid #eee;
        .context-btn {
            height: 100%;
        }
    }
}

:deep(.el-tabs) {
    margin-left: 10px;
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
