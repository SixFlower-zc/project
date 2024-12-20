<template>
  <div class="login-view">
    <h1 class="title">找回密码</h1>
    <a-form :model="form" @submit="handleSubmit">
      <a-form-item field="username" label="账户">
        <a-input
          v-model="form.username"
          placeholder="请输入账户"
          style="width: 240px"
        />
      </a-form-item>
      <a-form-item field="id" label="账户id">
        <a-input
          v-model="form.id"
          placeholder="请输入账户id"
          style="width: 240px"
        />
      </a-form-item>
      <a-form-item field="name" label="用户名">
        <a-input
          v-model="form.name"
          placeholder="请输入用户名"
          style="width: 240px"
        />
      </a-form-item>
      <a-form-item field="password" label="新密码">
        <a-input-password
          v-model="form.password"
          placeholder="请输入密码"
          style="width: 240px"
        />
      </a-form-item>
      <div
        style="display: flex; justify-content: space-around"
      >
        <a-link href="login" status="warning" icon
          >我想起来啦！</a-link
        >
      </div>
      <div>
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 10px;
          "
        >
          <a-button
            html-type="submit"
            shape="round"
            size="large"
            >登录</a-button
          >
        </div>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { findBack, putAdmin } from '@/api/Admin'
import { Message } from '@arco-design/web-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  id: '',
  name: '',
  username: '',
  password: '',
})

// 提交
const handleSubmit = async () => {
  switch (true) {
    case form.value.id == '':
    case form.value.name == '':
    case form.value.password == '':
    case form.value.username == '':
      Message.error('请将信息填写完整')
      return
    default: {
      const data = await findBack({
        name: form.value.name,
        username: form.value.username,
        id: form.value.id,
      })
      if (data.length > 0) {
        await putAdmin({
          ...data[0],
          password: form.value.password,
        })
        Message.success('密码修改成功，快去登陆吧~')
        router.replace('/login')
      } else {
        Message.error('信息填写错误')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
</style>
