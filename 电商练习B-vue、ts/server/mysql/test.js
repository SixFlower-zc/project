const Admin = require("./collection/Admin");
const sql = require("./index");
const md5 = require("md5");
const uuid = require("uuid");
const {
  getMenuListWithRole,
  getpermissionBtnListWithRole,
} = require("../permissionUtil");

function insertOneAdmin() {
  sql
    .insert(Admin, {
      adminid: "admin_" + uuid.v4(),
      adminname: "admin",
      password: md5("123456"),
      role: 1,
      checkedKeys: [],
      ip: "0.0.0.0",
      menuList: getMenuListWithRole(1),
      permissionList: getMenuListWithRole(1),
      permissionBtnList: getpermissionBtnListWithRole(1),
    })
    .then(() => {
      console.log("插入超级管理员1成功");
    });
  sql
    .insert(Admin, {
      adminid: "admin_" + uuid.v4(),
      adminname: "admin2",
      password: md5("123456"),
      role: 2,
      checkedKeys: [],
      ip: "0.0.0.0",
      menuList: getMenuListWithRole(2),
      permissionList: getMenuListWithRole(2),
      permissionBtnList: getpermissionBtnListWithRole(2),
    })
    .then(() => {
      console.log("插入管理员2成功");
    });
}

function getAdmin() {
  return sql.count(Admin, { adminname: "admin" });
}
function main() {
  getAdmin().then((r) => {
    console.log("管理员个数 admin：" + r);
    if (r == 0) {
      insertOneAdmin();
    }
  });
}
module.exports = main;
