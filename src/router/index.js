import Vue from 'vue'
import Router from 'vue-router'

import Login from 'views/login/Login'


Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    }


]

const router = new Router({
    routes,
    mode: 'history'
})

export default router