<template>
  <el-container class="app-layout">
    <el-aside width="200px">
      <el-scrollbar>
        <!-- router -->
        <!-- 是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
        <el-menu
          :router="true"
          active-text-color="#409eff"
          background-color="#001529"
          text-color="#fff"
          default-active="/home"
        >
          <el-menu-item>
            <img src="@/assets/logo.svg" alt="" style="width: 50px" />
            <span>xxx管理系统</span>
          </el-menu-item>

          <el-menu-item index="/home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-sub-menu index="/ProductManager">
            <template #title>
              <el-icon><message /></el-icon>商品管理
            </template>

            <el-menu-item index="/ProductManager/list">
              <el-icon><House /></el-icon> 商品列表</el-menu-item
            >
            <el-menu-item index="/ProductManager/add">
              <el-icon><House /></el-icon> 商品添加</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item index="/SwiperManager">
            <el-icon><House /></el-icon> 轮播图管理
          </el-menu-item>

          <el-menu-item index="/AdminManager">
            <el-icon><House /></el-icon> 管理员管理
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <!-- 右侧 头部 -->
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>编辑</el-dropdown-item>
                <el-dropdown-item @click="exitFN()">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>{{ userStore.username }}</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { useUserStore } from "@/stores/user.js";

export default {
  setup() {
    let userStore = useUserStore();
    return { userStore };
  },
  methods: {
    exitFN() {
      //点击退出-清空 数据-  跳转到登录
      localStorage.removeItem("token");
      this.userStore.token = null;
      this.userStore.username = null;

      this.$router.push("/login");
    }
  }
};
</script>

<!-- <script setup lang="ts">
import { ref } from "vue"
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue"

// const item = {
//   date: "2016-05-02",
//   name: "Tom",
//   address: "No. 189, Grove St, Los Angeles"
// }
// const tableData = ref(Array.from({ length: 20 }).fill(item))
</script> -->

<style scoped>
.app-layout {
  height: 100vh;
}

.app-layout .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.app-layout .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.app-layout .el-menu {
  border-right: none;
  height: 100vh;
}
.app-layout .el-main {
  padding: 0;
}
.app-layout .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
