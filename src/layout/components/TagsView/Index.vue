<script setup lang="ts">
import TagsItem from './TagsItem.vue';
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { ElScrollbar } from 'element-plus';

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

const scroll = () => {
    console.log('scroll');
};

// 当点击左右箭头时，滚动条滚动
const scrolLeft = () => {
    scrollbarRef.value?.scrollTo(0, 0);
};

const scrolRight = () => {
    scrollbarRef.value?.scrollTo(100, 0);
};
</script>

<template>
    <div class="layout-tags-view">
        <div class="scrollbar-btn" @click="scrolLeft">
            <el-icon><DArrowLeft /></el-icon>
        </div>
        <el-scrollbar ref="scrollbarRef" @scroll="scroll">
            <TagsItem />
        </el-scrollbar>
        <div class="scrollbar-btn" @click="scrolRight">
            <el-icon><DArrowRight /></el-icon>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout-tags-view {
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

    & > .el-scrollbar {
        flex: 1;
    }

    &-items {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        background-color: @--bg-panel;
        font-weight: 500;
    }
}
</style>
