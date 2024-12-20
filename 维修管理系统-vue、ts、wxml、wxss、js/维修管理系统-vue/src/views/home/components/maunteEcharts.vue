<template>
  <div ref="echart">图表</div>
</template>

<script setup lang="ts">
import { getMaintenance } from '@/api'
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

// 获取维修工列表
const maintenanceManList: Ref<MaintenanceMan[]> = ref([])

const getList = async () => {
  try {
    maintenanceManList.value = await getMaintenance()
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
    case '专长':
      const specialityArr = Array.from(
        new Set(
          maintenanceManList.value.map((v) => v.speciality)
        )
      ).map((item) => ({
        name: item,
        value: maintenanceManList.value.filter(
          (v) => v.speciality === item
        ).length,
      }))
      return specialityArr
    case '在职状态':
      const currentStateArr = Array.from(
        new Set(
          maintenanceManList.value.map(
            (v) => v.currentState
          )
        )
      ).map((item) => ({
        name: item,
        value: maintenanceManList.value.filter(
          (v) => v.currentState === item
        ).length,
      }))
      return currentStateArr
    case '工单业绩':
      const numArr = Array.from(
        new Set(
          maintenanceManList.value.map(
            (v) => v.TotalOrders.length
          )
        )
      ).map((item) => ({
        name: item + '单',
        value: maintenanceManList.value.filter(
          (v) => v.TotalOrders.length === item
        ).length,
      }))
      return numArr
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
    width: 340,
    height: 230,
  })

  draw({
    myChart: myChart.value,
    type: props.type,
    data: data.value,
    echart: echart.value,
    text: '维修工数据统计',
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
