import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { usemenuSelect } from './menuSelect'
import router from '@/router'
import { Message } from '@arco-design/web-vue'

export const useUserInfo = defineStore(
  'userInfo',
  () => {
    const userInfo = reactive({
      token: '',
      jwt: '',
      rule: '',
      id: '',
      name: '',
      memory: false,
    })

    function setInfo(obj: {
      token: string
      rule: string
      id: string
      name: string
      memory: boolean
    }) {
      userInfo.rule = obj.rule
      userInfo.token = obj.token
      userInfo.jwt = obj.token
      userInfo.id = obj.id
      userInfo.name = obj.name
      userInfo.memory = obj.memory
    }
    function getInfo() {
      return userInfo
    }
    function clearInfo() {
      usemenuSelect().setmenu('home')
      userInfo.rule = ''
      userInfo.token = ''
      userInfo.id = ''
      router.replace('/log')
      Message.success('退出登录成功')
    }
    return { userInfo, getInfo, setInfo, clearInfo } as {
      getInfo: () => {
        token: string
        jwt: string
        rule: string
        id: string
        name: string
        memory: boolean
      }
      setInfo: (obj: {
        token: string
        rule: string
        id: string
        memory: boolean
        name: string
      }) => void
      clearInfo: () => void
    }
  },
  { persist: true }
)
