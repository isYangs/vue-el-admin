<script lang="ts" setup>
import { ref } from 'vue';
import { LoginFrom, RegisterForm } from './components/';

const isLogin = ref(true);

const toRegister = () => {
    isLogin.value = false;
};

const toLogin = () => {
    isLogin.value = true;
};
</script>

<template>
    <div class="login-container">
        <div class="login-container__left">
            <div class="login-container__left__logo">
                <img src="@/assets/logo.png" alt="logo" />
                <span>VueElAdmin</span>
            </div>
            <div class="login-container__left__content">
                <img src="@/assets/svg/login-bg.svg" />
                <div class="login-container__left__content_decs">
                    <span>欢迎使用本系统</span>
                    <span> VueElAdmin 是一个基于 Vue3 和 ElementPlus 的后台管理系统模板 </span>
                </div>
            </div>
        </div>
        <div class="login-container__right">
            <LoginFrom v-if="isLogin" @to-register="toRegister" />
            <RegisterForm v-else @to-login="toLogin" />
        </div>
    </div>
</template>

<style lang="less">
.login-container {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    display: flex;

    &__left {
        width: 50%;
        background-color: @--bg-login-left;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: center;

        &__logo {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;

            img {
                width: 48px;
                height: 48px;
                margin-left: 20px;
            }

            span {
                font-size: 24px;
                color: @--text-color;
                margin-left: 10px;
            }
        }

        &__content {
            width: calc(100% / 2);
            display: flex;
            flex: 1;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: flex-start;

            img {
                width: 450px;
                height: 300px;
            }

            &_decs {
                width: 100%;
                display: flex;
                flex-flow: column nowrap;
                margin: 40px 0 0 5px;

                span:nth-child(1) {
                    font-size: 36px;
                    margin-bottom: 20px;
                }

                span {
                    font-size: 18px;
                    color: @--text-color;
                }
            }
        }
    }

    &__right {
        width: 50%;
        background-color: @--bg-login-right;
        display: flex;
        justify-content: center;
        align-items: center;

        &__form {
            width: 500px;
            height: 600px;
            display: flex;
            flex-flow: column wrap;
            align-items: center;

            &_title {
                span {
                    font-size: 24px;
                }
            }

            &_items {
                width: 100%;
                align-items: center;

                & > div {
                    width: 100%;
                    margin-bottom: 20px;
                }

                & > div[class*='button-'] {
                    button {
                        width: 100%;
                        height: 40px;
                    }
                }
            }

        }
    }
}

</style>
