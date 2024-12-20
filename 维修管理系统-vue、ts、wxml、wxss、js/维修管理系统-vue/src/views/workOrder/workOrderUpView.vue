<template>
  <div class="workOrderUp">
    <!-- 上传工单信息 -->
    <a-form
      :model="addWorkOrder"
      :style="{
        width: '500px',
        border: '1px solid #000',
        padding: '20px',
      }"
      @submit="handleSubmit"
    >
      <a-form-item
        field="contact"
        label="联系人"
        :rules="[
          { required: true, message: '请选择联系人' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-select
          v-model="addWorkOrder.contact"
          placeholder="请选择住户"
          allow-create
        >
          <a-option
            v-for="item in householdData"
            :key="item.id"
            >{{ item.name }}</a-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        field="maintenanceMan"
        label="维修工"
        :rules="[
          { required: true, message: '请选择维修工' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-select
          v-model="addWorkOrder.maintenanceMan"
          placeholder="请选择维修工"
          allow-create
        >
          <a-option
            v-for="item in MaintenanceManData"
            :key="item.id"
            >{{ item.name }}</a-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        field="faultLocation"
        label="地址"
        :rules="[{ required: true, message: '请输入地址' }]"
        :validate-trigger="['change', 'input']"
      >
        <a-textarea
          v-model="addWorkOrder.faultLocation"
          placeholder="请输入地址"
          allow-clear
          :auto-size="{
            minRows: 2,
            maxRows: 2,
          }"
        />
      </a-form-item>
      <!-- 图片上传占位符 -->
      <a-form-item
        field="described"
        label="故障描述"
        :rules="[
          { required: true, message: '请输入故障描述' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-textarea
          v-model="addWorkOrder.described"
          placeholder="请输入故障描述"
          allow-clear
          :auto-size="{
            minRows: 2,
            maxRows: 5,
          }"
        />
      </a-form-item>
      <a-form-item
        field="remarks"
        label="工单备注"
        :validate-trigger="['change', 'input']"
      >
        <a-textarea
          v-model="addWorkOrder.remarks"
          placeholder="请输入备注"
          allow-clear
          :auto-size="{
            minRows: 2,
            maxRows: 2,
          }"
        />
      </a-form-item>
      <div class="btn">
        <a-button html-type="submit">上传</a-button>
        <a-button @click="clear">重置</a-button>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {
  postWorkOrder,
  getHouseholds,
  getMaintenance,
} from '@/api'
import { useUserInfo } from '@/stores'
import dayToStr from '@/utils/dayToStr'
import RandomString from '@/utils/RandomString'
import { Message } from '@arco-design/web-vue'
import { ref, type Ref } from 'vue'

// 获取住户列表
const householdData: Ref<household[] | null> = ref(null)
const getHouseholdList = async () => {
  try {
    householdData.value = await getHouseholds()
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getHouseholdList()

// 获取维修工列表
const MaintenanceManData: Ref<MaintenanceMan[] | null> =
  ref(null)
const getMaintenanceList = async () => {
  MaintenanceManData.value = await getMaintenance()
}
getMaintenanceList()

// 上传工单
const userInfo = useUserInfo()
const addWorkOrder: Ref<addWorkOrder> = ref({
  image: '/src/assets/images/six_flower.jpg',
  workOrderStatus: '派单',
})

// 检查必填变量是否为空
const check = () => {
  switch (true) {
    case addWorkOrder.value.contact == '':
    case addWorkOrder.value.contact == undefined:
    case addWorkOrder.value.maintenanceMan == '':
    case addWorkOrder.value.maintenanceMan == undefined:
    case addWorkOrder.value.faultLocation == '':
    case addWorkOrder.value.faultLocation == undefined:
    case addWorkOrder.value.described == '':
    case addWorkOrder.value.described == undefined:
      Message.error('请填写完整信息')
      return false
    default:
      return true
  }
}

// 清空表单
const clear = () => {
  addWorkOrder.value = {
    image: '/src/assets/images/six_flower.jpg',
    workOrderStatus: '创建工单',
  }
}

// 表单操作
// 表单提交
const handleSubmit = () => {
  if (!check()) return
  addWorkOrder.value = {
    ...addWorkOrder.value,
    id: 'WO' + dayToStr('YYYYMM') + RandomString(3),
    Date: dayToStr('YYYY-MM-DD'),
    phone:
      householdData.value?.filter(
        (v) => v.name === addWorkOrder.value.contact
      )[0].phone || '',
    price: '0',
    log: [
      {
        id: 1,
        state: '创建工单',
        Date: dayToStr('YYYY-MM-DD HH:mm'),
        person: userInfo.getInfo().name,
      },
      {
        id: 2,
        state: '派单',
        Date: dayToStr('YYYY-MM-DD HH:mm'),
        person: userInfo.getInfo().name,
      },
    ],
  }
  post()
}

// 上传工单
const post = async () => {
  try {
    await postWorkOrder({
      ...addWorkOrder.value,
    })
    Message.success('创建工单成功')
    clear()
  } catch (err) {
    console.error(err)
    Message.error('创建失败')
  }
}
</script>

<style lang="scss" scoped>
.workOrderUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .btn {
    display: flex;
    justify-content: space-around;
  }
}
</style>
