import http from '@/utils/http'

// 上传新用户数据
export const postUser = async (obj: User) => {
  return await http({
    method: 'POST',
    url: '/user',
    data: {
      ...obj,
    },
  })
}

// 删除指定用户
export const delUser = async (id: string) => {
  return await http({
    method: 'DELETE',
    url: '/user/' + id,
  })
}
