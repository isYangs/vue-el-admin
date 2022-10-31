<script setup lang="ts">
import { useAppStore } from '@/store';

const appStore = useAppStore();
</script>

<template>
    <div class="logo">
        <transition name="sidebarLogo">
            <router-link
                v-if="appStore.getCollapse"
                class="sidebar-logo-link"
                to="/dashboard"
            >
                <img src="@/assets/logo.png" alt="logo" />
            </router-link>
            <router-link v-else class="sidebar-logo-link" to="/dashboard">
                <img src="@/assets/logo.png" alt="logo" />
                <span>VueElAdmin</span>
            </router-link>
        </transition>
    </div>
</template>

<style scoped lang="less">
.sidebarLogo-enter-active {
    transition: opacity 1s;
}
.sidebarLogo-enter-from,
.sidebarLogo-leave-to {
    opacity: 0;
}
.logo {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: @--bg-logo;
    border-bottom: solid 1px #000;
    overflow: hidden;

    .sidebar-logo-link {
        display: flex;
        align-items: center;
        justify-content: center;
        color: @--text-color;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;

        img {
            width: 45px;
            height: 45px;
        }

        span {
            font-size: 20px;
            color: @--text-color;
            margin-left: 5px;
        }
    }
}
</style>
