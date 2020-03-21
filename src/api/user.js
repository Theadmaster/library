import {request} from '@/network/request'
import qs from 'qs'

export function login(data) {
  return request({
    // url: baseUrl() + '/public/login',
    url: '/public/login',
    method: 'post',
    // 将data转化为字符串
    data: qs.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/public/logout',
    method: 'post'
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post'
  })
}
