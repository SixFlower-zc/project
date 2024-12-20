const mongoose = require("./../db");
const Schema = mongoose.Schema;

const schema = new Schema({
  adminid: { type: String, required: true },
  adminname: { type: String, required: true },
  password: { type: String, required: true },
  // 2超级管理员  1 普通管理员
  role: { type: Number, required: false },
  roles: { type: Array, required: false },
  checkedKeys: { type: Array, required: false },
  // 菜单数据
  menuList: { type: Array, required: false },
  // 路由数据
  permissionList: { type: Array, required: false },
  permissionBtnList: { type: Array, required: false },
  ip: { type: String },
});

module.exports = mongoose.model("Admin", schema);
