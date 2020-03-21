import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://127.0.0.1',
        timeout: 5000
    })
    // 2.axios 拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);  
        console.log('请求拦截错误'); 
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
        console.log('响应拦截错误'); 
    })
    return instance(config)
}