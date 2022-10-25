<script setup lang="ts">
import Logo from './components/Logo.vue';
import Menu from './components/Menu.vue';
</script>

<template>
    <el-container>
        <el-aside width="auto">
            <Logo />
            <Menu />
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang="less">
.el-container {
    height: 100%;
}

.el-aside {
    height: 100%;
    background-color: @--bg-aside;
    display: flex;
    flex-flow: column wrap;
}
</style>
