<script setup lang="ts"></script>

<template>
    <div class="layout-main">
        <router-view />
    </div>
</template>

<style scoped lang="less">
.layout-main {
    height: 100%;
    background: @--bg-main;
}
</style>
