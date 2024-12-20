// http://localhost:3001/admin/file/upload

import http from "@/utils/http";
let uploadImgAPI = "/admin/file/upload";

// jsdoc
/**
 * 上传图片
 * @param {FormData} params
 * @returns
 */
export function updateImgReq(formData) {
  return http.post(uploadImgAPI, formData);
}
