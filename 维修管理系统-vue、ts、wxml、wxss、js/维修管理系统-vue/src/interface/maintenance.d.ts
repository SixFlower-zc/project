type speciality =
  | '水电维修'
  | '设备维护'
  | '园艺与绿化'
  | '设施维护'
  | '建筑结构修理'
  | '安全设施检查'
  | '道路与停车场维护'
  | '物业公共设施维修'

interface Skill {
  speciality: speciality
  skills: string[]
}

interface MaintenanceMan {
  id: string
  name: string
  phone: string
  level: string
  workExperience: string
  speciality: speciality
  skills: string[]
  certificate: string[]
  currentState: string
  remarks: string
  TotalOrders: string[]
}

interface addMaintenanceMan {
  id?: string
  name?: string
  phone?: string
  level?: string
  workExperience?: string
  speciality?: speciality
  skills?: string[]
  certificate?: string[]
  currentState?: string
  remarks?: string
  TotalOrders?: string[]
}

interface MaintenanceManParams {
  id?: string
  name?: string
  speciality?: speciality
}
