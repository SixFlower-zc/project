import { useUserInfo } from '@/stores/userInfo'
import dayToStr from '@/utils/dayToStr'
import http from '@/utils/http'

// 获取工单列表
export const getWorkOrder = async (
  params?: getWorkOrderParams
) => {
  const data = await http({
    url: '/workOrder',
    params: {
      ...params,
    },
  })
  return data.data as WorkOrder[]
}

// 改变工单状态
export const stateChange = async (
  obj: WorkOrder,
  str: LogState
) => {
  const userInfo = useUserInfo()
  await http({
    method: 'PATCH',
    url: '/workOrder/' + obj.id,
    data: {
      workOrderStatus: str,
      log: [
        ...obj.log,
        {
          id: obj.log.length + 1,
          state: str,
          Date: dayToStr('YYYY-MM-DD HH:mm'),
          person: userInfo.getInfo().name,
        },
      ],
    },
  })
}

// 添加工单
export const postWorkOrder = async (obj: addWorkOrder) => {
  await http({
    method: 'POST',
    url: '/workOrder',
    data: {
      ...obj,
    },
  })
}

// 删除工单
export const delWorkOrder = async (obj: addWorkOrder) => {
  await http({
    method: 'DELETE',
    url: '/workOrder/' + obj.id,
  })
}
