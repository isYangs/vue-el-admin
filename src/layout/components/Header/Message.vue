<script lang="ts" setup>
import { computed, ref } from 'vue';

// 通知数量
const noticeNumber = ref(3);
// 消息数量
const msgNumber = ref(0);
// 代办数量
const todoNumber = ref(0);
// 默认激活的tab
const activeName = ref('noticeTab');

// 跳转项目地址
const toProject = () => {
    window.open('https://github.com/isYangs/vue-el-admin');
};
</script>

<template>
    <el-popover placement="bottom" :width="250" trigger="click">
        <template #reference>
            <slot></slot>
        </template>
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane :label="`通知(${noticeNumber})`" name="noticeTab">
                <template v-if="noticeNumber > 0">
                    <div class="message-box" @click="toProject">
                        <div class="message-box-icon">
                            <Icon name="notice" :type="false" :size="32" />
                        </div>
                        <div class="message-box-right">
                            <div class="message-box-title">
                                项目已开源到Github🚀
                            </div>
                            <div class="message-box-time">一分钟前</div>
                        </div>
                    </div>
                    <div class="message-box" @click="toProject">
                        <div
                            class="message-box-icon"
                            style="background-color: #85ce61"
                        >
                            <Icon name="message" :type="false" :size="32" />
                        </div>
                        <div class="message-box-right">
                            <div class="message-box-title">
                                项目已开源到Github🚀
                            </div>
                            <div class="message-box-time">一分钟前</div>
                        </div>
                    </div>
                    <div class="message-box" @click="toProject">
                        <div
                            class="message-box-icon"
                            style="background-color: #66b1ff"
                        >
                            <Icon name="todo" :type="false" :size="32" />
                        </div>
                        <div class="message-box-right">
                            <div class="message-box-title">
                                项目已开源到Github🚀
                            </div>
                            <div class="message-box-time">一分钟前</div>
                        </div>
                    </div>
                </template>
                <template v-else><el-empty description="暂无通知" /></template>
            </el-tab-pane>
            <el-tab-pane :label="`消息(${msgNumber})`" name="messageTab">
                <template v-if="msgNumber > 0">消息</template>
                <template v-else><el-empty description="暂无消息" /></template>
            </el-tab-pane>
            <el-tab-pane :label="`代办(${todoNumber})`" name="todoTab">
                <template v-if="todoNumber > 0">代办</template>
                <template v-else><el-empty description="暂无代办" /></template>
            </el-tab-pane>
        </el-tabs>
    </el-popover>
</template>

<style scoped lang="less">
:deep(.el-tabs__header) {
    margin-bottom: 5px;
}
.message-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 2px solid #ebeef5;
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }

    &-icon {
        margin-right: 10px;
        width: 48px;
        height: 48px;
        line-height: 15px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f78989;

        & > .e-icon {
            margin: 0;
        }
    }
    &-right {
        flex: 1;
        .message-box-title {
            font-size: 14px;
            color: #303133;
            margin-bottom: 5px;

            &:hover {
                color: @--text-color-active;
            }
        }
        .message-box-time {
            font-size: 12px;
            color: #909399;
        }
    }
}
</style>
