// 日志接口
interface Log {
  id: number
  state: LogState
  Date: string
  person: string
}

// 工单状态类型
type LogState =
  | '创建工单'
  | '派单'
  | '上传费用'
  | '审核完成'
  | '待支付'
  | '施工中'
  | '已完成'
  | '订单取消'

// 工单信息接口
interface WorkOrder {
  id: string
  Date: string
  faultLocation: string
  contact: string
  phone: string
  described: string
  image: string
  maintenanceMan: string
  workOrderStatus: LogState
  remarks: string
  price: string
  log: Log[]
}
// 上传接口
interface addWorkOrder {
  id?: string
  Date?: string
  faultLocation?: string
  contact?: string
  phone?: string
  described?: string
  image?: string
  maintenanceMan?: string
  workOrderStatus?: LogState
  remarks?: string
  price?: string
  log?: Log[]
}

// 获取列表传搜索参数接口
interface getWorkOrderParams {
  _page?: number
  _limit?: number
  id?: string
  contact?: string
  Date?: string
  maintenanceMan?: string
  workOrderStatus?: string
}
