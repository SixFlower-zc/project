<template>
  <div class="adminInfo">
    <div class="img">
      <img
        :src="adminInfo?.avatar"
        :alt="adminInfo?.name + '的头像'"
      />
    </div>
    <div class="table">
      <h1>{{ adminInfo?.name }}</h1>
      <h1>{{ adminInfo?.role }}</h1>
      <a-button
        type="primary"
        status="danger"
        shape="round"
        @click="userinfo.clearInfo()"
        style="width: 150px"
        >退出登录</a-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAdmin } from '@/api'
import { useUserInfo } from '@/stores'
import { Message } from '@arco-design/web-vue'
import { ref, type Ref } from 'vue'

const userinfo = useUserInfo()
const adminInfo: Ref<Admin | undefined> = ref()

const getInfo = async () => {
  try {
    adminInfo.value = await getAdmin(userinfo.getInfo().id)
  } catch (err) {
    console.error(err)
    Message.error('获取信息失败')
  }
}
getInfo()
</script>

<style lang="scss" scoped>
.adminInfo {
  display: flex;
  flex-direction: row;
  padding: 30px;

  .table {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      flex: 1;
    }
  }
  .img {
    img {
      width: 200px;
      margin: 20px;
      margin-left: 100px;
      border-radius: 50%;
    }
  }
}
</style>
