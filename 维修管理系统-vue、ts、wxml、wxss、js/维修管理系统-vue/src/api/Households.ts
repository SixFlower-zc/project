import http from '@/utils/http'
import { delUser, postUser } from './user'

// 获取住户列表
export const getHouseholds = async (
  obj?: getHouseholdsParams
) => {
  const data = await http({
    url: '/households',
    params: {
      ...obj,
    },
  })
  return data.data as household[]
}

// 上传住户信息
export const postHouseholds = async (obj: addhousehold) => {
  await http({
    method: 'POST',
    url: '/households',
    data: {
      ...obj,
      age: Number(obj.age),
    },
  })

  // 顺便注册用户账号
  const user: User = {
    id: obj.id,
    role: '0',
    username: obj.id,
    password: '123456',
  }
  postUser(user)
}

// 修改住户信息
export const putHouseholds = async (obj: addhousehold) => {
  await http({
    method: 'PUT',
    url: '/households/' + obj.id,
    data: {
      ...obj,
      age: Number(obj.age),
    },
  })
}

// 删除住户
export const delHouseholds = async (id: string) => {
  await http({
    method: 'DELETE',
    url: '/households/' + id,
  })
  try {
    await delUser(id)
  } catch (err) {
    console.error('删除账号失败', err)
  }
}
