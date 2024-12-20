<template>
  <div>
    <h1>调查问卷</h1>
    姓名: <input type="text" v-model="name" /><br />
    性别: <input type="radio" value="男" id="男" v-model="gender" checked /><label for="男">男</label><input type="radio" value="女" id="女" v-model="gender" /><label for="女">女</label><br />
    籍贯:
    <select name="" id="" v-model="select1">
      <option selected>无</option>
      <option>河南</option>
    </select>
    <select name="" id="" v-model="select2">
      <option selected>无</option>
      <option>郑州</option>
    </select>
    <br />
    爱好: <br />
    <input type="checkbox" value="唱" v-model="hobby" />唱 <br />
    <input type="checkbox" value="跳" v-model="hobby" />跳 <br />
    <input type="checkbox" value="rap" v-model="hobby" />rap <br />
    个人介绍: <br />
    <textarea name="" id="" v-model="txt"></textarea>
  </div>
  <div>
    <h1>信息展示</h1>
    <p>姓名:{{ name }}</p>
    <p>性别:{{ gender }}</p>
    <p>籍贯:{{ select1 + "省" + select2 + "市" }}</p>
    <p>爱好:{{ hobby_str }}</p>
    <p>个人介绍:{{ txt }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    hobby_str() {
      return this.hobby.join(",");
    },
  },
  data() {
    return {
      name: "",
      gender: "男",
      select1: "无",
      select2: "无",
      hobby: [],
      txt: "",
    };
  },
};
</script>
<style>
div {
  border: 1px solid pink;
  text-align: center;
}
</style>
