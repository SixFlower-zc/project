import http from "@/utils/http.js";

let proListAPI = "/admin/pro/list";
export function proListReq(count = 1, limitNum = 10, search = "") {
  // return 了promise对象
  //   外部调用login函数-得到一个promise对象，promsie对象会去发请求
  //   p.then.catch
  return http.get(proListAPI, { params: { count, limitNum, search } });
}

let proUpdateAPI = "/admin/pro/product";
export function proUpdateReq(pid, body) {
  // return 了promise对象
  //   外部调用login函数-得到一个promise对象，promsie对象会去发请求
  //   p.then.catch
  return http.patch(proUpdateAPI + "/" + pid, body);
}

export function proDeleteReq(pid) {
  // return 了promise对象
  //   外部调用login函数-得到一个promise对象，promsie对象会去发请求
  //   p.then.catch
  return http.delete(proUpdateAPI + "/" + pid);
}

export function proSendReq(body) {
  // return 了promise对象
  //   外部调用login函数-得到一个promise对象，promsie对象会去发请求
  //   p.then.catch
  return http.post(proUpdateAPI, body);
}
