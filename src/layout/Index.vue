<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store';
import { Expand, Fold } from '@element-plus/icons-vue';
import Logo from './components/Logo/Logo.vue';
import Menu from './components/Aside/Index.vue';
import Main from './components/Main/Index.vue';
import Header from './components/Header/Index.vue';
import TagsView from './components/TagsView/Index.vue';

const appStore = useAppStore();

const handleCollapse = () => {
    appStore.setCollapse(!appStore.getCollapse);
};

const autoWidth = computed(() => {
    if (!appStore.getCollapse && appStore.getMobile) {
        return '0px';
    } else if (!appStore.getCollapse) {
        return '64px';
    } else if (appStore.getCollapse && appStore.getMobile) {
        return '200px';
    } else {
        return '200px';
    }
});
</script>

<template>
    <el-container>
        <el-aside
            :style="{
                width: autoWidth,
                'z-index': appStore.getMobile ? 9999 : 0,
            }"
        >
            <Logo />
            <el-scrollbar>
                <Menu />
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header>
                <Header>
                    <el-icon class="layout-menu-button" @click="handleCollapse">
                        <component :is="appStore.getCollapse ? Fold : Expand" />
                    </el-icon>
                </Header>
            </el-header>
            <TagsView />
            <el-scrollbar>
                <el-main>
                    <Main />
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<style lang="less">
.el-container {
    height: 100%;
    overflow: hidden;

    .el-aside {
        height: 100%;
        background-color: @--bg-aside;
        display: flex;
        flex-flow: column nowrap;
        transition: width 0.5s;
        -webkit-transition: width 0.5s;
        -moz-transition: width 0.5s;
        -o-transition: width 0.5s;

        & > .el-scrollbar {
            margin-bottom: auto;
        }
    }

    .el-header {
        width: 100%;
        padding: 5px 0;
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
        height: 35px;
        padding: 10px 0;
        display: flex;
        align-items: center;
        background: @--bg-panel;
        font-size: 15px;
        font-weight: 500;
        overflow: hidden;
    }

    .el-scrollbar {
        height: 100%;
    }

    .el-main {
        height: 100%;
        padding: 20px;
    }
}
</style>
