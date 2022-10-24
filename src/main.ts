import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Icon from './views/Components/Icon.vue';
import './assets/iconfont/iconfont.js'

createApp(App).component('Icon', Icon).use(router).mount('#app');
