import Vue from 'vue'
import Router from 'vue-router'

import Login from 'views/login/Login'
import Home from 'views/home/Home'


Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }


]

const router = new Router({
    routes,
    mode: 'history'
})

export default router