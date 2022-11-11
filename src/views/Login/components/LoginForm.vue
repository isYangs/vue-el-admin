<script setup lang="ts">
import { reactive, ref } from 'vue';
import { FormInstance } from 'element-plus';
import { LoginForm } from '@/types';
import { user } from '@/api';
import { useRouter } from 'vue-router';
import { Storage, Constants } from '@/utils/storage';

const { addRoute, push } = useRouter();

const loginForm = reactive<LoginForm>({
    username: 'admin',
    password: 'admin',
});

const checkbox = ref(false);

const emit = defineEmits(['to-register']);

const toRegister = () => {
    emit('to-register');
};

const loginFormRef = ref<FormInstance>();
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
    ],
});

const loginSubmit = async () => {
    await loginFormRef.value?.validate(async valid => {
        if (valid) {
            const { username, password } = loginForm;
            const res = await user.login({ username, password });
            if (res.data.code === 200) {
                Storage.set(Constants.USER_INFO, res.data.data);
                push('/dashboard');
                ElMessage({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success',
                    duration: 2000,
                    center: true,
                });
            } else {
                ElMessage({
                    showClose: true,
                    message: res.data.msg,
                    type: 'error',
                    duration: 2000,
                    center: true,
                });
            }
        }
    });
};
</script>
<template>
    <div class="login-container__right__form">
        <div class="login-container__right__form_title">
            <span>登录</span>
        </div>
        <el-form
            class="login-container__right__form_items"
            ref="loginFormRef"
            :model="loginForm"
            :rules="rules"
            label-position="top"
        >
            <el-form-item label="用户名" prop="username">
                <el-input
                    type="username"
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                    clearable
                />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="请输入密码"
                    clearable
                    show-password
                />
            </el-form-item>
            <el-form-item class="forgot-password">
                <el-checkbox label="记住我" size="large" v-model="checkbox" />
                <el-button type="primary" link>忘记密码</el-button>
            </el-form-item>
            <el-form-item class="button-login">
                <el-button type="primary" @click="loginSubmit">登录</el-button>
            </el-form-item>
            <el-form-item class="button-register">
                <el-button type="default" @click="toRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <el-divider
            content-position="center"
            class="login-container__right__form_division"
        >
            其他登录方式
        </el-divider>
        <div class="login-container__right__form_other">
            <Icon name="github" />
            <Icon name="QQ" />
            <Icon name="weixin" />
            <Icon name="zhifubao" />
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
}
</style>
