import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import router from './router/router.ts'
// @ts-ignore
import Vue3Lottie from 'vue3-lottie'

createApp(App)
    .use(router)
    .use(Vue3Lottie)
    .mount('#app')
