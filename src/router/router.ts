import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import LoginPage from "../page/authed/LoginPage.vue";
// @ts-ignore
import RegisterPage from '../page/authed/Register.vue'
// @ts-ignore
import MainPage from "../page/MainPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'login'
        },
        {
            path:'/home',
            component: MainPage
        },
        {
            path: '/login',
            component: LoginPage,
        },
        {
            path: '/register',
            component: RegisterPage,
        },
    ],
})