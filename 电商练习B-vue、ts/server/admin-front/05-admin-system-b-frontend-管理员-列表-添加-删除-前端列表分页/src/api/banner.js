import http from "@/utils/http";

// 用户商品统计的接口
export function bannerListReq() {
  return http({
    url: "/admin/banner/list"
  });
}

export function bannerDeleteReq(bannerid) {
  return http({
    url: "/admin/banner/delete",
    params: { bannerid }
  });
}

export function bannerAddReq(form) {
  return http({
    url: "/admin/banner/add",
    data: form,
    method: "post"
  });
}
