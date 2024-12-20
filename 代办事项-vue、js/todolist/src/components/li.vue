<template>
  <li>
    <div>
      <el-link :type="item.completed ? 'success' : 'danger'" @click="change(item.id)">{{ index + 1 }}</el-link>
    </div>
    <div>
      <el-tag el-tag class="ml-2" :type="item.completed ? 'success' : 'danger'">{{ item.title }}</el-tag>
    </div>
    <div><el-checkbox v-model="item.completed" @change="put(item.id, false)" label="已完成" border /></div>
    <div><el-button @click="change(item.id)" :round="true" :auto-insert-space="true" color="#626aef">修改</el-button></div>
    <div><el-button @click="del(item.id)" :round="true" :auto-insert-space="true" color="#626aef">删除</el-button></div>
  </li>
</template>
<script>
export default {
  props: ["item", "index"],
  inject: ["change", "del", "put"],
};
</script>
<style></style>
