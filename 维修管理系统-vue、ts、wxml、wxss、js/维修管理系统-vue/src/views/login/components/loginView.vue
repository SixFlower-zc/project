<template>
  <div class="login-view">
    <h1 class="title">欢迎登录</h1>
    <a-form :model="form" @submit="handleSubmit">
      <a-form-item field="username" label="账户">
        <a-input
          v-model="form.username"
          placeholder="请输入账户"
          style="width: 240px"
        />
      </a-form-item>
      <a-form-item field="password" label="密码">
        <a-input-password
          v-model="form.password"
          placeholder="请输入密码"
          style="width: 240px"
        />
      </a-form-item>
      <div
        style="display: flex; justify-content: space-around"
      >
        <a-checkbox v-model="memory">记住密码</a-checkbox>
        <a-link href="findBack" status="warning" icon
          >忘记密码</a-link
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
import { login } from '@/api'
import { useUserInfo } from '@/stores'
import { encryption, verification } from '@/utils/JwtCode'
import { Message } from '@arco-design/web-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  username: '',
  password: '',
})

const userinfo = useUserInfo()
const router = useRouter()
const memory = ref(userinfo.getInfo().memory)

// 记住密码
if (userinfo.getInfo().memory) {
  verification(userinfo.getInfo().jwt).then((res) => {
    form.value = {
      username: res.username as string,
      password: res.password as string,
    }
  })
}

// 检查 token 自动登录
if (userinfo.getInfo().token !== '') {
  router.replace('/')
}

// 登录
const handleSubmit = async () => {
  if (form.value.username === '') {
    Message.error('请输入账户')
    return false
  }
  if (form.value.password === '') {
    Message.error('请输入密码')
    return false
  }
  const data = await login(form.value.username)
  if (data.length === 0) {
    Message.error('该账户不存在')
  } else if (data[0].password !== form.value.password) {
    Message.error('密码错误')
  } else {
    Message.success('登陆成功')
    userinfo.setInfo({
      token: await encryption({
        username: data[0].username,
        password: data[0].password,
      }),
      rule: data[0].role,
      name: data[0].name,
      id: data[0].id,
      memory: memory.value,
    })
    router.replace('/')
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
