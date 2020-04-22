import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getAutoTable() {
  return request({
    url: '/demo/table/auto-table',
    method: 'get'
  })
}
