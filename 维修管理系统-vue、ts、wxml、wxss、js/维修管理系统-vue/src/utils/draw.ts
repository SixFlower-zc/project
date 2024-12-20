import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

// 画饼状图
const draw = (obj: {
  myChart: echarts.ECharts
  type: string
  data: EchartsData[]
  echart: HTMLElement | null
  text: string
}) => {
  const option: EChartsOption = {
    title: {
      text: obj.text,
      subtext: obj.type,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    legend: {
      type: 'scroll',
      bottom: 'bottom',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        itemStyle: {
          borderRadius: 10,
          borderColor: 'pink',
          borderWidth: 1,
        },
        color: [
          '#65a2ff',
          '#fa8080',
          '#ffc076',
          '#fae768',
          '#87e885',
          '#3cb9fc',
          '#73abf5',
          '#cb9bff',
        ],
        data: obj.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  obj.myChart.setOption(option)
}

export default draw
