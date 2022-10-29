<script setup lang="ts">
import { Close } from '@element-plus/icons-vue';
</script>

<template>
    <div class="layout-tags-view">
        <div class="layout-tags-view__item active">
            <span>仪表盘</span>
            <el-icon class="layout-tags-view__item__close">
                <component :is="Close" />
            </el-icon>
        </div>
        <div class="layout-tags-view__item">
            <span>网站设置</span>
            <el-icon class="layout-tags-view__item__close">
                <component :is="Close" />
            </el-icon>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout-tags-view {
    width: 100%;
    height: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    background-color: @--bg-panel;
    border-bottom: solid 1px #eee;
    font-weight: 500;
    .layout-tags-view__item {
        height: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.35s;
        -webkit-transition: all 0.35s;
        -moz-transition: all 0.35s;
        -o-transition: all 0.35s;

        &:first-child {
            margin-left: 10px;
        }

        & > span {
            margin-left: 5px;
        }
        &.active {
            color: @--text-color;
            background-color: @--bg-tags-active;
        }
        &.active > .layout-tags-view__item__close {
            width: 14px;
        }
        &:hover {
            color: @--text-color;
            background-color: @--bg-tags-hover;
        }

        &:hover .layout-tags-view__item__close {
            width: 14px;
        }
        & > .layout-tags-view__item__close {
            width: 0;
            height: 14px;
            line-height: 15px;
            margin-left: 5px;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            border-radius: 50%;
            transition: all 0.35s;

            &:hover {
                color: @--text-color;
                background: @--text-color-placeholder;
            }
        }
    }
}
</style>
