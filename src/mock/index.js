import Mock from 'mockjs'

import Login from './login.js'

// 设置mock的延时
Mock.setup({
  timeout: '200-2000'
})

// 登录数据的拦截
Mock.mock('http://127.0.0.1/public/login', 'post', Login.getToken)
Mock.mock('http://localhost/user/info', 'post', Login.getUserInfo)
