import {request} from '@/network/request'
/**
 * 获取菜单树数据
 */
export function getMenuTree() {
  return request({
    url: 'menu/tree',
    method: 'get'
  })
}
