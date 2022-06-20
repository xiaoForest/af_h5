import {
    createApp
} from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'
import 'amfe-flexible/index.js'
import '@/assets/css/reset'
import 'animate.css' //https://animate.style/
import { Skeleton } from 'vant';
createApp(App).use(Skeleton).use(router).mount('#app')