import Axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

export function request(config) {
    // 1.创建axios实例
    const instance = Axios.create({
        baseURL: 'http://127.0.0.1',
        timeout: 5000
    })
    // 2.axios 拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['Token'] = getToken() 
            // console.log(config);
        }
        console.log(123);
        
        return config
        
        
    }, err => {
        console.log(err);
        console.log('请求拦截错误');
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
        console.log('响应拦截错误');
    })
    return instance(config)
}