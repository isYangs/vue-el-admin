import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/index.css';
import Icon from '@/views/Components/Icon.vue';
import '@/assets/iconfont/iconfont.js';
import { createPinia } from 'pinia';
import 'normalize.css';
import 'animate.css';

const pinia = createPinia();

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.component('Icon', Icon);
app.use(pinia);
app.use(router);
app.mount('#app');
