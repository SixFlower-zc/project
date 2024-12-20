<template>
  <div class="echarts">
    <div>
      <holdEcharts :type="search.hold" />
      <maunteEcharts :type="search.maunte" />
    </div>
    <div>
      <div class="search">
        <div>
          <div>住户</div>
          <a-select
            placeholder="Please select ..."
            v-model="search.hold"
            @change="handlerSelect"
          >
            <a-option>性别</a-option>
            <a-option>年龄</a-option>
            <a-option>入住年份</a-option>
          </a-select>
        </div>
        <div>
          <div>维修工</div>
          <a-select
            placeholder="Please select ..."
            v-model="search.maunte"
            @change="handlerSelect"
          >
            <a-option>专长</a-option>
            <a-option>在职状态</a-option>
            <a-option>工单业绩</a-option>
          </a-select>
        </div>
        <div>
          <div>工单</div>
          <a-select
            placeholder="Please select ..."
            v-model="search.order"
            @change="handlerSelect"
          >
            <a-option>工单状态</a-option>
            <a-option>负责经理</a-option>
            <a-option>维修人员</a-option>
            <a-option>住户订单</a-option>
          </a-select>
        </div>
      </div>
      <orderEcharts :type="search.order" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  holdEcharts,
  maunteEcharts,
  orderEcharts,
} from './components'
import { useEchartType } from '@/stores'

const search = useEchartType().get()

const handlerSelect = () => {
  console.log(search.value)
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;

  > :first-child {
    flex: 2;
    display: flex;
    flex-direction: column;
    height: 100%;

    > div {
      flex: 1;
      width: 100%;
      padding: 10px;
    }
  }

  > :last-child {
    flex: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
      display: flex;

      > div {
        padding: 10px;
        flex: 1;
      }
    }

    > div {
      width: 100%;
      flex: 1;
      padding: 10px;
    }
  }
}
</style>
