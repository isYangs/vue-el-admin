import { Ref } from 'vue';

export interface LoginForm {
    username: string;
    password: string;
    confirmPassword?: string;
    phone?: string;
    code?: number | Ref<number>;
    codeMin?: number | Ref<number>;
    codeMax?: number | Ref<number>;
}
