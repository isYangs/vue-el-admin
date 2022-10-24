<script setup lang="ts">
import { reactive, ref } from 'vue';
const emit = defineEmits(['to-login']);
const loginForm = reactive({
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    verificationCode: ref(0),
    verificationCodeMin: ref(1000),
    verificationCodeMax: ref(9999),
});

const getVerificationCode = () => {
    ElNotification({
        title: '警告',
        message: '连后端都没有，你要个der验证码！',
        type: 'warning',
        duration: 0,
        appendTo: document.body,
    });
};

const toLogin = () => {
    emit('to-login');
};
</script>
<template>
    <div class="login-container__right__form">
        <div class="login-container__right__form_title">
            <span>注册</span>
        </div>
        <el-form class="login-container__right__form_items" label-position="top">
            <el-form-item label="用户名">
                <el-input type="username" v-model="loginForm.username" placeholder="请输入用户名" clearable />
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" clearable show-password />
            </el-form-item>
            <el-form-item label="确定密码">
                <el-input type="password" v-model="loginForm.confirmPassword" placeholder="请输入密码" clearable show-password />
            </el-form-item>
            <el-form-item label="手机号">
                <el-input type="number" v-model.number="loginForm.phone" placeholder="请输入手机号" clearable>
                    <template #append>
                        <el-button type="primary" @click="getVerificationCode">获取验证码</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-slider v-model="loginForm.verificationCode" :min="loginForm.verificationCodeMin" :max="loginForm.verificationCodeMax" show-input />
            </el-form-item>
            <el-form-item class="button-login">
                <el-button type="primary">注册</el-button>
            </el-form-item>
            <el-form-item class="button-register">
                <el-button type="default" @click="toLogin">已有账号？去登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
:deep(.el-input__inner) {
    height: 35px;
}
</style>
