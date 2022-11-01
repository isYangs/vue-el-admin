<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { LoginForm } from '@/types';

const emit = defineEmits(['to-login']);
const loginForm = reactive<LoginForm>({
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    code: ref(0),
    codeMin: ref(1000),
    codeMax: ref(9999),
});

const getCode = () => {
    ElNotification({
        title: '警告',
        message: '连后端都没有，你要个der验证码！',
        type: 'warning',
        duration: 4000,
        appendTo: document.body,
    });
};

const toLogin = () => {
    emit('to-login');
};

let registerForm = ref();
onMounted(() => {
    registerForm.value.children[1][5].disabled = true;
});

const registerFormRef = ref<FormInstance>();
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        //  用户名长度4-10位且不能以数字，中文，特殊字符开头
        {
            pattern: /^[a-zA-Z_]\w{3,9}$/,
            message: '用户名长度4-10位且不能以数字，中文，特殊字符开头',
            trigger: 'blur',
        },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        // 密码长度6-16位，至少包含数字、字母、特殊字符中的两种
        {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
            message: '密码长度6-16位，至少包含数字、字母、特殊字符中的两种',
            trigger: 'blur',
        },
    ],
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        {
            validator: (rule: any, value: string, callback: any) => {
                if (value !== loginForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            },
            trigger: 'blur',
        },
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: 'blur',
        },
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        {
            validator: (rule: any, value: number, callback: any) => {
                if (value !== loginForm.code) {
                    callback(new Error('验证码错误!'));
                } else {
                    callback();
                }
            },
            trigger: 'blur',
        },
    ],
});

const submitForm = () => {
    registerFormRef.value?.validate((valid: boolean) => {
        if (valid) {
            ElNotification({
                title: '警告',
                message: '说了半天没有后端，你还注册个der！',
                type: 'warning',
                duration: 4000,
                appendTo: document.body,
            });
        } else {
            ElNotification({
                title: '错误',
                message: '请先满足校验条件以后再注册！',
                type: 'error',
                duration: 4000,
                appendTo: document.body,
            });
        }
    });
};
</script>
<template>
    <div class="login-container__right__form" ref="registerForm">
        <div class="login-container__right__form_title">
            <span>注册</span>
        </div>
        <el-form
            class="login-container__right__form_items"
            ref="registerFormRef"
            :model="loginForm"
            label-position="top"
            :rules="rules"
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
            <el-form-item label="确定密码" prop="confirmPassword">
                <el-input
                    type="password"
                    v-model="loginForm.confirmPassword"
                    placeholder="请再次输入密码"
                    clearable
                    show-password
                />
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input
                    type="number"
                    v-model.number="loginForm.phone"
                    placeholder="请输入手机号"
                    clearable
                >
                    <template #append>
                        <el-button type="primary" @click="getCode">
                            获取验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code" class="verification-code">
                <el-slider
                    v-model="loginForm.code"
                    :min="loginForm.codeMin"
                    :max="loginForm.codeMax"
                    show-input
                />
            </el-form-item>
            <el-form-item class="button-login">
                <el-button type="primary" @click="submitForm">注册</el-button>
            </el-form-item>
            <el-form-item class="button-register">
                <el-button type="default" @click="toLogin">
                    已有账号？去登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
:deep(.el-input__inner) {
    height: 35px;
}
</style>
