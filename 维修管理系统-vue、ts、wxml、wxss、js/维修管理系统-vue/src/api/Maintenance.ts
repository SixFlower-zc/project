import http from '@/utils/http'
import { delUser, postUser } from './user'

// 获取维修工列表
export const getMaintenance = async (
  obj?: MaintenanceManParams
) => {
  const data = await http({
    url: '/maintenanceMan',
    params: {
      ...obj,
    },
  })
  return data.data as MaintenanceMan[]
}

// 上传维修工信息
export const postmaintenanceMan = async (
  obj: addMaintenanceMan
) => {
  await http({
    method: 'POST',
    url: '/maintenanceMan',
    data: {
      ...obj,
    },
  })
  // 顺便注册用户账号
  const user: User = {
    id: obj.id,
    role: '1',
    username: obj.id,
    password: '123456',
  }
  postUser(user)
}

// 修改维修工信息
export const putmaintenanceMan = async (
  obj: addMaintenanceMan
) => {
  await http({
    method: 'PUT',
    url: '/maintenanceMan/' + obj.id,
    data: {
      ...obj,
    },
  })
}

// 删除维修工
export const delmaintenanceMan = async (id: string) => {
  await http({
    method: 'DELETE',
    url: '/maintenanceMan/' + id,
  })
  try {
    console.log(id)
    await delUser(id)
  } catch (err) {
    console.error('删除账号失败', err)
  }
}

// 获取技能列表
export const getSkills = async () => {
  const data = await http({
    url: '/skills',
  })
  return data.data as Skill[]
}
