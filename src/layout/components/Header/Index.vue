<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAppStore } from '@/store';
import BreadCrumb from './BreadCrumb.vue';
import MessageBox from './Message.vue';
import { useFullscreen } from '@vueuse/core';
import { ElMessage, ElMessageBox } from 'element-plus';
import {
    UserFilled,
    Edit,
    Location,
    SwitchButton,
} from '@element-plus/icons-vue';

const appStore = useAppStore();
// 全屏
const { toggle, isFullscreen } = useFullscreen();

// 是否为移动端
const isMobile = computed(() => {
    return appStore.getMobile;
});

// 是否展示消息中心打开后的提示
const isShowMessageTip = ref(true);

// 消息数量
const msgNumber = ref(3);
// 头像url
const avatarUrl = ref('https://a.xuewuzhibu.cn/1/62ffa32495bbf-1.jpg');

// 跳转项目地址
const toProject = () => {
    window.open('https://github.com/isYangs/vue-el-admin');
};

// 清空缓存
const clearCache = () => {
    ElMessageBox.confirm('此操作将永久清空缓存, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            // 此处编写清空缓存的方法
            ElMessage({
                type: 'success',
                message: '清空成功!',
                duration: 2000,
                center: true,
            });
        })
        .catch(e => e);
};
</script>

<template>
    <div class="layout-header">
        <div class="layout-header-left">
            <slot></slot>
            <BreadCrumb v-show="!isMobile" />
        </div>
        <div class="layout-header-right">
            <div class="layout-header-right__icon">
                <div class="layout-header-right__icon-btn">
                    <MessageBox>
                        <el-badge :value="msgNumber">
                            <el-tooltip :disabled="!isShowMessageTip">
                                <template #content>
                                    <span>消息中心</span>
                                </template>
                                <el-icon
                                    @click="
                                        isShowMessageTip = !isShowMessageTip
                                    "
                                >
                                    <Bell />
                                </el-icon>
                            </el-tooltip>
                        </el-badge>
                    </MessageBox>
                </div>
                <div class="layout-header-right__icon-btn">
                    <el-tooltip>
                        <template #content>
                            <span>清空缓存</span>
                        </template>
                        <el-icon @click="clearCache"><Delete /></el-icon>
                    </el-tooltip>
                </div>
                <div class="layout-header-right__icon-btn">
                    <el-tooltip>
                        <template #content>
                            <span>最大化窗口</span>
                        </template>
                        <Icon
                            :name="isFullscreen ? 'minimize' : 'maximize'"
                            :type="false"
                            :size="23"
                            color="#000"
                            @click="toggle"
                        />
                    </el-tooltip>
                </div>
            </div>
            <div class="layout-header-right__avatar">
                <el-dropdown trigger="click">
                    <el-avatar :src="avatarUrl" :size="35" />

                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item
                                :icon="isMobile ? '' : UserFilled"
                            >
                                个人中心
                            </el-dropdown-item>
                            <el-dropdown-item :icon="isMobile ? '' : Edit">
                                修改密码
                            </el-dropdown-item>
                            <el-dropdown-item
                                :icon="isMobile ? '' : Location"
                                @click="toProject"
                                divided
                            >
                                项目地址
                            </el-dropdown-item>
                            <el-dropdown-item
                                :icon="isMobile ? '' : SwitchButton"
                                divided
                            >
                                退出登录
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout-header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;

    &-left {
        display: flex;
        align-items: center;
        .layout-menu-button {
            margin-right: 20px;
        }
    }

    &-right {
        display: flex;
        align-items: center;

        &__icon {
            width: 115px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 10px;

            &-btn {
                cursor: pointer;

                .el-icon {
                    font-size: 24px;
                    cursor: pointer;

                    &:hover {
                        color: @--text-color-active;
                    }
                }
            }
        }

        &__avatar {
            margin-right: 30px;
            cursor: pointer;
            .el-avatar {
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
}
</style>
