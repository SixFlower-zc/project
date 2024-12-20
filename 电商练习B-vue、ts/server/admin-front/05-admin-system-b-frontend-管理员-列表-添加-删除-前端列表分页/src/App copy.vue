<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  hello
  <div id="box">aaa</div>
  <el-button type="primary">Primary</el-button>

  <div class="con">
    <div class="top">aaa</div>
  </div>

  <el-icon :size="'20px'" :color="'red'">
    <Edit />
  </el-icon>

  <Pouring style="width: 1em; height: 1em; margin-right: 8px" />

  <RouterView />
</template>

<!-- sass-》css预处理器---  scss写法 和 sass写法 -->
<!--sass 文档 https://www.sass.hk/ -->
<style scoped lang="scss">
// @import url();
// $highlight-color: #f90;
#box {
  // color: $highlight-color$;
}
// .con .top{}
.con {
  .top {
    color: #c31c1c;
  }
}

//
article a {
  color: blue;
  &:hover {
    color: red;
  }
}
</style>
