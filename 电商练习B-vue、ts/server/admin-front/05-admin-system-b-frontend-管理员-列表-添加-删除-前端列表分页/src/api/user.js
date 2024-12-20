import http from "@/utils/http.js";

let adminLoginAPI = "/admin/admin/login";
export function loginReq(adminname, password) {
  // return 了promise对象
  //   外部调用login函数-得到一个promise对象，promsie对象会去发请求
  //   p.then.catch
  return http.post(adminLoginAPI, { adminname, password });
}

// 管理员列表
let adminListAPI = "/admin/admin/list";
let adminAddAPI = "/admin/admin/add";
let adminDeleteAPI = "/admin/admin/delete";
export function getAdminListReq(adminname, password) {
  return http.get(adminListAPI);
}
export function adminAddReq(obj) {
  return http.post(adminAddAPI, obj);
}
export function adminDeleteReq(adminid) {
  return http.post(adminDeleteAPI, { adminid });
}
