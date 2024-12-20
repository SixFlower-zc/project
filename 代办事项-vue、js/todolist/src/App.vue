<template>
  <div>
    title: <span class="lengthDiv"><el-input type="text" v-model="txt.title" clearable /></span> completed:<el-checkbox v-model="txt.completed" label="已完成" border /> <el-button @click="post" :round="true" :auto-insert-space="true" color="#626aef">发布</el-button>
  </div>
  <span class="lengthDiv" style="width: 100px">
    <el-select name="" id="" v-model="select">
      <el-option value="全部">全部</el-option>
      <el-option value="已完成">已完成</el-option>
      <el-option value="未完成">未完成</el-option>
    </el-select>
  </span>
  <div v-show="flag">
    title: <span class="lengthDiv"><el-input type="text" v-model="changeObj.title" clearable /></span> completed: <el-checkbox v-model="changeObj.completed" label="已完成" border /> <el-button @click="put(changeObj.id)" :round="true" :auto-insert-space="true" color="#626aef">更新</el-button><el-button @click="flag = false" :round="true" :auto-insert-space="true" color="#626aef">取消</el-button>
  </div>
  <ul>
    <Li v-for="(item, index) in data_filter" :key="item.id" :item="item" :index="index"></Li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.init();
  },
  computed: {
    data_filter() {
      switch (this.select) {
        case "全部":
          return this.data_arr;
        case "已完成":
          return this.data_arr.filter((item) => item.completed);
        case "未完成":
          return this.data_arr.filter((item) => !item.completed);
      }
    },
  },
  data() {
    return {
      flag: false,
      select: "全部",
      data_arr: [],
      txt: {
        title: "",
        completed: false,
      },
      changeObj: {
        id: 1,
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    get(id) {
      return axios("http://localhost:3000/todos" + (id ? "/" + id : ""));
    },
    async post() {
      let { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/todos",
        data: {
          title: this.txt.title,
          completed: this.txt.completed,
        },
      });
      console.log("发布", data);
      this.txt.title = "";
      this.txt.completed = false;
      this.init();
    },
    async del(id) {
      let data = await axios({
        method: "DELETE",
        url: "http://localhost:3000/todos/" + id,
      });
      console.log("删除", data);
      this.init();
    },
    async put(id, flag = true) {
      if (flag) {
        let { data } = await axios({
          method: "PUT",
          url: "http://localhost:3000/todos/" + id,
          data: {
            title: this.changeObj.title,
            completed: this.changeObj.completed,
          },
        });
        console.log("修改", data);
        this.flag = false;
        this.init();
      } else {
        let { data } = await this.get(id);
        console.log(data);

        await axios({
          method: "PUT",
          url: "http://localhost:3000/todos/" + id,
          data: {
            title: data.title,
            completed: !data.completed,
          },
        });
        console.log("修改", data);
      }
    },
    async change(id) {
      this.flag = true;
      let { data } = await this.get(id);
      this.changeObj = { ...data };
      console.log("获取对应id的选项", data);
    },
    async init() {
      let { data } = await this.get();
      console.log("获取全部列表", data);
      this.data_arr = data;
    },
  },
  provide() {
    return {
      change: this.change,
      put: this.put,
      del: this.del,
    };
  },
};
</script>
<style>
* {
  text-align: center;
}
li {
  display: flex;
  border: 1px solid pink;
}
li > div {
  flex: 1;
  border: 1px solid pink;
}
.lengthDiv {
  display: inline-block;
  width: 300px;
}
</style>
