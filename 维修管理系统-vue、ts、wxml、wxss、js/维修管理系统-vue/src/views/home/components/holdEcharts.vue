<template>
  <div ref="echart">图表</div>
</template>

<script setup lang="ts">
import { getHouseholds } from '@/api'
import { Message } from '@arco-design/web-vue'
import {
  computed,
  onMounted,
  ref,
  watch,
  type Ref,
} from 'vue'
import * as echarts from 'echarts'
import dayjs from 'dayjs'
import draw from '@/utils/draw'

// 获取住户列表
const householdList: Ref<household[]> = ref([])

const getList = async () => {
  try {
    householdList.value = await getHouseholds()
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
    case '性别':
      return [
        {
          name: '男',
          value: householdList.value?.filter(
            (v) => v.gender === '男'
          ).length,
        },
        {
          name: '女',
          value: householdList.value?.filter(
            (v) => v.gender === '女'
          ).length,
        },
      ]
    case '年龄':
      const maxAge = Math.max(
        ...householdList.value.map((v) => v.age)
      )
      let ageArr: EchartsData[] = []
      for (let i = 0; i < maxAge; i += 20) {
        ageArr = [
          ...ageArr,
          {
            name: i + '~' + (i + 19),
            value: householdList.value.filter(
              (v) => v.age >= i && v.age < i + 19
            ).length,
          },
        ]
      }
      return ageArr
    case '入住年份':
      const yearArr = Array.from(
        new Set(
          householdList.value.map((v) =>
            dayjs(v.date).format('YYYY')
          )
        )
      ).map((item) => ({
        name: item,
        value: householdList.value.filter(
          (v) => dayjs(v.date).format('YYYY') === item
        ).length,
      }))
      return yearArr
    default:
      return []
  }
})

watch(data, () => {
  drawing()
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
    text: '住户数据统计',
  })
}

onMounted(() => {
  drawing()
})
</script>

<style lang="scss" scoped></style>
