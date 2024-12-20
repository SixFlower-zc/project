// npm i axios
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

let userUser = useUserStore();

// https://www.axios-http.cn/docs/instance

// http://localhost:3001/admindoc

// 创建一个单独axios实例- 这个实例对象跟 axios上面的属性方法都一样
// 参数--请求配置
let http = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000 //超时时间--超过10秒，axios认为请求失败
  //   headers: { "X-Custom-Header": "foobar" },
  //配置请求头--设置请求体的类型
  // headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
// axios.defaults.headers.common['auth'] = 'token'

// http.get(url,{params:{搜索参数}});
// http.post(url,请求体);
// http.patch(url，请求体);
// http.put(url，请求体);
// http.delete(url);

// // 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么  配置token
    let token = localStorage.getItem("token");
    if (token) {
      // config["headers"]["authorization"] = token;
      // 请求头中的token 设置--参见接口文档
      config["headers"]["token"] = token;
      // config["headers"]["token"] = "bearar "+token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// // 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    console.log("响应拦截器", response);

    // 2xx 范围内的状态码都会触发该函数。
    // 设置token 使用
    // 对响应数据做点什么
    //全局axios响应拦截到 请求成功
    if (response.data.code == "10119") {
      let router = useRouter();

      // token过期--清除本地数据-让用户重新登录
      localStorage.removeItem("token");
      userUser.token = null;
      userUser.username = null;
      router.push("/login");

      ElMessage({
        message: response.data.message,
        type: "error",
        plain: true
      });
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default http;

// axios
// 基地址
// axios.defaults.baseURL = "http://localhost:8888";
//请求头中 Authorization  ，配置token
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//请求体的内容类型
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// axios.get(url,{params:{搜索参数}});
// axios.post(url,请求体);
// axios.patch(url，请求体);
// axios.put(url，请求体);
// axios.delete(url);

// // 添加请求拦截器
// axios.interceptors.request.use(
//   function (config) {
//     // 在发送请求之前做些什么
//     return config;
//   },
//   function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// // 添加响应拦截器
// axios.interceptors.response.use(
//   function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     设置token 使用
//     // 对响应数据做点什么
//     return response;
//   },
//   function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   }
// );
