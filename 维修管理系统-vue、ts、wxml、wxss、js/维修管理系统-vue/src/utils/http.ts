import { useUserInfo } from '@/stores/userInfo'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const http = axios.create({
  baseURL: 'http://localhost:1314',
  timeout: 3000,
})

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    NProgress.start()
    // 在发送请求之前做些什么
    const userInfo = useUserInfo()
    config.headers.token = userInfo.getInfo().token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    NProgress.done()
    // 打印响应数据
    console.log(response)
    return response
  },
  function (error) {
    // 失败状态相同无法做对应拦截
    return Promise.reject(error)
  }
)

export default http
