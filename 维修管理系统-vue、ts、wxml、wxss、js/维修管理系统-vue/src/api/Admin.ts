import http from '@/utils/http'

// 登录
export const login = async (username: string) => {
  const data = await http({
    url: '/admin/',
    params: {
      username,
    },
  })
  return data.data as Admin[]
}

// 找回密码
export const findBack = async (obj: {
  username: string
  id: string
  name: string
}) => {
  const data = await http({
    url: '/admin/',
    params: {
      username: obj.username,
      id: obj.id,
      name: obj.name,
    },
  })
  return data.data as Admin[]
}

// 获取管理员列表
export const getAdminList = async (obj?: AdminParams) => {
  const data = await http({
    url: '/admin',
    params: {
      ...obj,
    },
  })
  return data.data as Admin[]
}

// 获取指定管理员信息
export const getAdmin = async (id: string) => {
  const data = await http({
    url: '/admin/' + id,
  })
  return data.data as Admin
}

// 上传新管理员信息
export const postAdmin = async (obj: addAdmin) => {
  await http({
    method: 'POST',
    url: '/admin',
    data: {
      ...obj,
    },
  })
}

// 修改管理员信息
export const putAdmin = async (obj: addAdmin) => {
  await http({
    method: 'PUT',
    url: '/admin/' + obj.id,
    data: {
      ...obj,
    },
  })
}

// 删除管理员
export const delAdmin = async (obj: Admin) => {
  await http({
    method: 'DELETE',
    url: '/admin/' + obj.id,
  })
}
