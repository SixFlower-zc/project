import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useEchartType = defineStore(
  'echartType',
  () => {
    const EchartType = ref({
      hold: '性别',
      maunte: '专长',
      order: '工单状态',
    })
    function get() {
      return EchartType
    }
    return { EchartType, get } as {
      get: () => Ref<EchartsType>
    }
  },
  { persist: true }
)
