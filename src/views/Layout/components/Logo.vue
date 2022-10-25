<script setup lang="ts"></script>

<template>
    <div class="logo">
        <img src="@/assets/logo.png" alt="logo" />
        <span>VueElAdmin</span>
    </div>
</template>

<style scoped lang="less">
.logo {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: @--bg-logo;

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
</style>
