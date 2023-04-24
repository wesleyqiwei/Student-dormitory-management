import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/students/list',
    method: 'post',
    data
  })
}
