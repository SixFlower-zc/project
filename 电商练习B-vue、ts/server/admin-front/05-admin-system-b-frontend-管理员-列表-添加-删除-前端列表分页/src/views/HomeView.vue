<template lang="">
  <div>首页</div>

  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="always" class="statistic_count">
        <span>商品总数 : {{ prodcutCount }} </span>
        <el-button @click="getProductData">更新</el-button>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always" class="statistic_count">
        <span> 用户总数 : {{ userCount }} </span>
        <el-button @click="getUserData">更新</el-button>
      </el-card>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <div id="main" ref="div1"></div>
    </el-col>
    <el-col :span="12">
      <div ref="div2" id="m2"></div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { productTotalReq, userTotalReq, kDataReq, simpleDataReq } from "@/api/home";
import * as echarts from "echarts";

let userCount = ref(0);
let prodcutCount = ref(0);

function getProductData() {
  productTotalReq().then((r) => {
    console.log(r.data);
    prodcutCount.value = r.data.data;
  });
}
getProductData();

function getUserData() {
  userTotalReq().then((r) => {
    console.log(r.data);
    userCount.value = r.data.data;
  });
}

getUserData();

// 图表逻辑
let div1 = ref(null);

onMounted(() => {
  saleshart();
  kChart();
});

async function saleshart() {
  //组件挂载完毕以后，获取dom
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(div1.value);
  let r = await simpleDataReq();
  console.log(r.data);
  let xData = r.data.data.map((v) => v.x);
  let yData = r.data.data.map((v) => v.val);

  myChart.setOption({
    title: {
      text: "商品销量"
    },
    tooltip: {},
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: yData
      }
    ]
  });
}

let div2 = ref(null);
async function kChart() {
  let r = await kDataReq();
  console.log(r.data);
  let { x, val } = r.data.data;

  let myChart = echarts.init(div2.value);
  let option = {
    xAxis: {
      data: x
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: val
      }
    ]
  };
  myChart.setOption(option);
}
</script>
<style lang="scss" scoped>
:deep(.el-card__body) {
  display: flex;
  justify-content: space-between;
  align-items: center; // span 文件垂直居中
}

#main,
#m2 {
  width: 100%;
  height: 70vh;
}
</style>
