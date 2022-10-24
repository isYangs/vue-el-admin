<script setup lang="ts">
import { reactive, ref } from 'vue';

const loginForm = reactive({
    username: '',
    password: '',
});

const checkbox = ref(false);

const emit = defineEmits(['to-register']);

const toRegister = () => {
    emit('to-register');
};
</script>
<template>
    <div class="login-container__right__form">
        <div class="login-container__right__form_title">
            <span>登录</span>
        </div>
        <el-form class="login-container__right__form_items" label-position="top">
            <el-form-item label="用户名">
                <el-input type="username" v-model="loginForm.username" placeholder="请输入用户名" clearable />
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" clearable show-password />
            </el-form-item>
            <el-form-item class="forgot-password">
                <el-checkbox label="记住我" size="large" v-model="checkbox" />
                <el-button type="primary" link>忘记密码</el-button>
            </el-form-item>
            <el-form-item class="button-login">
                <el-button type="primary">登录</el-button>
            </el-form-item>
            <el-form-item class="button-register">
                <el-button type="default" @click="toRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <el-divider content-position="center" class="login-container__right__form_division">其他登录方式</el-divider>
        <div class="login-container__right__form_other">
            <Icon name="github" class="other-icon" link="" />
            <Icon name="QQ" class="other-icon" link="" />
            <Icon name="weixin" class="other-icon" link="" />
            <Icon name="zhifubao" class="other-icon" link="" />
        </div>
    </div>
</template>

<style scoped lang="less">
:deep(.el-input__inner) {
    height: 35px;
}
:deep(.forgot-password) {
    & > .el-form-item__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

<style lang="less">
.login-container__right__form_other {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .other-icon {
        width: 32px;
        height: 32px;
        color: rgba(0, 0, 0, 0.4);
    }
}
</style>
