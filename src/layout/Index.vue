<script setup lang="ts">
import Logo from './components/Logo/Logo.vue';
import Menu from './components/Aside/Index.vue';
import Main from './components/Main/Index.vue';
import Header from './components/Header/Index.vue';
import TagsView from './components/TagsView/Index.vue';
import { computed, onUpdated, ref } from 'vue';
import { useAppStore } from '@/store';
import { isMobile } from '@/utils/isMobile';
import { Expand, Fold } from '@element-plus/icons-vue';

const appStore = useAppStore();
const IsMobile = computed(() => isMobile());

const handleCollapse = () => {
    appStore.setCollapse(!appStore.getCollapse);
};

const autoWidth = computed(() => {
    if (appStore.getCollapse && IsMobile.value) {
        return '0px';
    } else if (appStore.getCollapse) {
        return '64px';
    } else {
        return '200px';
    }
});
</script>

<template>
    <el-container>
        <el-aside :style="`width:${autoWidth}`">
            <Logo />
            <el-scrollbar>
                <Menu :IsMobile="IsMobile" />
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header>
                <el-icon class="layout-menu-button" @click="handleCollapse">
                    <component :is="appStore.getCollapse ? Expand : Fold" />
                </el-icon>
                <Header />
            </el-header>
            <TagsView />
            <el-main>
                <Main />
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="less">
.el-container {
    height: 100%;
    .el-aside {
        height: 100%;
        background-color: @--bg-aside;
        display: flex;
        flex-flow: column nowrap;
        transition: width 0.35s;
        -webkit-transition: width 0.35s;
        -moz-transition: width 0.35s;
        -o-transition: width 0.35s;

        & > .el-scrollbar {
            flex: 1;
        }
    }

    .el-header {
        width: 100%;
        height: 50px;
        padding: 0;
        background: @--bg-panel;
        border-bottom: solid 1px #eee;
        display: flex;
        align-items: center;
        justify-content: center;

        .layout-menu-button {
            width: 50px;
            height: 100%;
            cursor: pointer;
            font-size: 20px;
        }
    }
    .layout-tags-view {
        width: 100%;
        height: 35px;
        padding: 5px 0;
        display: flex;
        align-items: center;
        font-size: 15px;
        background: @--bg-panel;
    }
}
</style>
