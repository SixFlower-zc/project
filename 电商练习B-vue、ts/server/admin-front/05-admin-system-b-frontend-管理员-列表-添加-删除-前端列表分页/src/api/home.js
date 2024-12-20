import http from "@/utils/http";

let productTotalAPI = "/admin/statistic/product";
let userTotalAPI = "/admin/statistic/user";
// 用户商品统计的接口
export function productTotalReq() {
  return http.get(productTotalAPI);
}

export function userTotalReq() {
  return http.get(userTotalAPI);
}

let kDataAPI = "/admin/data/kData"; // 简单K线图
let simpleDataAPI = "/admin/data/simpleData"; //简单图表数据
export function kDataReq() {
  return http.get(kDataAPI);
}

export function simpleDataReq() {
  return http.get(simpleDataAPI);
}
