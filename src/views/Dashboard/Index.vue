<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useAppStore } from '@/store';
import { getCurrentTime } from '@/utils/time';
import ECharts from '@/components/ECharts/Index.vue';
import {
    langChartOptionCreator,
    consoleChartOptionCreator,
} from '@/utils/charts';

const appStore = useAppStore();
const consoleRef = ref({} as HTMLDivElement);

// 是否为移动端
const isMobile = computed(() => appStore.getMobile);
// 获取当前时间段
const atime = computed(() => getCurrentTime());
// 获取头像
const avatarUrl = computed(() => {
    return appStore.getAvatar;
});
// 用户名
const userName = ref('admin');

// 登录时间
const loginTime = ref('2022-11-07');
// 登录IP
const loginIp = ref('210.72.145.44');
// 获取本项目最后一次提交
const lastCommit = ref('fix: 修复tags标签样式bug');

// 获取语言统计数据
const langChartData = computed(() => {
    return appStore.getLang;
});

onMounted(() => {
    appStore.addLang();
});
</script>

<template>
    <div class="console" :class="isMobile ? 'console-xs' : ''" ref="consoleRef">
        <el-card shadow="hover" body-style="padding: 20px 20px 15px">
            <div class="console-header-tip">
                <transition name="console-avatar" appear>
                    <el-avatar
                        class="console-header-tip-avatar"
                        :src="avatarUrl"
                    />
                </transition>
                <span class="console-header-tip-title">
                    <template v-for="item in atime">
                        {{ item.time }}吖 {{ userName }}，{{ item.hitokoto }}
                    </template>
                </span>
                <div v-if="!isMobile" class="console-header-tip-right">
                    <div class="console-header-tip-right-t">
                        <span>登录时间：{{ loginTime }}</span>
                        <span>登录IP：{{ loginIp }}</span>
                    </div>
                    <div class="console-header-tip-right-b">
                        <el-button type="primary" plain>个人中心</el-button>
                        <el-button type="danger" plain>退出登录</el-button>
                    </div>
                </div>
            </div>
            <div class="console-header-tip-update">
                最近更新：{{ lastCommit }}
                <el-button type="primary" link>前往查看</el-button>
            </div>
        </el-card>
        <el-row justify="space-between" class="console-chart">
            <el-col :xs="24" :sm="12">
                <el-card
                    shadow="hover"
                    class="console-chart-lang"
                    body-style="padding: 0;"
                >
                    <ECharts
                        :option="langChartOptionCreator(langChartData)"
                        :height="'300px'"
                        :page="consoleRef"
                    />
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12">
                <el-card
                    shadow="hover"
                    class="console-chart-console"
                    body-style="padding: 0;"
                >
                    <ECharts
                        :option="consoleChartOptionCreator()"
                        :height="'300px'"
                        :page="consoleRef"
                    />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="less">
.console {
    height: 100%;
    background: @--bg;

    .console-header-tip {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        &-avatar {
            min-width: 60px;
            min-height: 60px;
            border-radius: 50%;
            margin-right: 20px;
            transition: all 1s;

            &:hover {
                transform: rotate(-360deg);
                cursor: pointer;
            }
        }

        &-title {
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
        }

        &-right {
            width: auto;
            height: 70px;
            padding-left: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            &-t {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                font-size: 14px;
                color: @--text-color-sub;

                span:first-child {
                    margin-bottom: 5px;
                }
            }

            &-b {
                display: flex;
                justify-content: space-between;

                .el-button {
                    padding: 0 15px;
                }
            }
        }

        &-update {
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: center;
            font-size: 15px;
            color: @--text-color-sub;
        }
    }
    &-chart {
        .el-col {
            margin: 10px 0;
        }

        [class*='console-chart-'] {
            height: 300px;
            padding: 10px;
        }
    }
}

.console-xs {
    .console-header-tip {
        flex-direction: column;

        &-avatar {
            margin-right: 0;
            margin-bottom: 10px;
        }

        &-title {
            margin-right: 0;
            font-size: 18px;
        }

        &-right {
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            &-t {
                flex-direction: row;
                margin-bottom: 0;
                font-size: 14px;
                color: @--text-color-sub;

                span:first-child {
                    margin-right: 10px;
                }
            }

            &-b {
                display: flex;
                justify-content: flex-end;

                .el-button {
                    padding: 0 15px;
                }
            }
        }

        &-update {
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
            color: @--text-color-sub;
        }
    }
}
</style>
