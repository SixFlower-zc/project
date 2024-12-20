<template>
  <div ref="echart">图表</div>
</template>

<script setup lang="ts">
import { getWorkOrder } from '@/api'
import { Message } from '@arco-design/web-vue'
import {
  computed,
  onMounted,
  ref,
  watch,
  type Ref,
} from 'vue'
import * as echarts from 'echarts'
import draw from '@/utils/draw'

// 获取工单列表数据
const workOrderList: Ref<WorkOrder[]> = ref([])
const getList = async () => {
  try {
    workOrderList.value = await getWorkOrder()
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getList()

// 组件接收父亲传值
const props = defineProps(['type'])

// 计算属性根据 type 计算数据
const data = computed(() => {
  switch (props.type) {
    case '工单状态':
      const workOrderStatusArr = Array.from(
        new Set(
          workOrderList.value.map((v) => v.workOrderStatus)
        )
      ).map((item) => ({
        name: item,
        value: workOrderList.value.filter(
          (v) => v.workOrderStatus === item
        ).length,
      }))
      return workOrderStatusArr
    case '负责经理':
      const adminArr = Array.from(
        new Set(
          workOrderList.value.map((v) => v.log[1].person)
        )
      ).map((item) => ({
        name: item,
        value: workOrderList.value.filter(
          (v) => v.log[1].person === item
        ).length,
      }))
      return adminArr
    case '住户订单':
      const contactArr = Array.from(
        new Set(workOrderList.value.map((v) => v.contact))
      ).map((item) => ({
        name: item,
        value: workOrderList.value.filter(
          (v) => v.contact === item
        ).length,
      }))
      return contactArr
    case '维修人员':
      const maintenanceManArr = Array.from(
        new Set(
          workOrderList.value.map((v) => v.maintenanceMan)
        )
      ).map((item) => ({
        name: item,
        value: workOrderList.value.filter(
          (v) => v.maintenanceMan === item
        ).length,
      }))
      return maintenanceManArr
    default:
      return []
  }
})

// 画图
const echart = ref(null)
const myChart: Ref<echarts.ECharts | undefined> = ref()

const drawing = () => {
  if (!myChart.value) {
    myChart.value = echarts.init(echart.value)
  }

  myChart.value.resize({
    width: 600,
    height: 380,
  })

  draw({
    myChart: myChart.value,
    type: props.type,
    data: data.value,
    echart: echart.value,
    text: '工单数据统计',
  })
}

watch(data, () => {
  drawing()
})

onMounted(() => {
  drawing()
})
</script>

<style lang="scss" scoped></style>
