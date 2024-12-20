const router = require("express").Router();
const mysql = require("../mysql");
const Banner = require("../mysql/collection/Role");
const uuid = require("uuid");
/**
 * @api {post} /admin/role 添加role数据
 * @apiName AdminRoleAdd
 * @apiGroup Role
 * @apiHeader {String} token  token
 * @apiBody {String} roleName role名称
 * @apiBody {String} roleMenuArr role角色的菜单数组
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '插入数据'
 *  }
 */
router.post("/", (req, res, next) => {
  const insertData = req.body;
  insertData.roleId = "role_" + uuid.v4();
  mysql.insert(Banner, insertData).then(() => {
    res.send({
      code: "200",
      message: "插入数据",
    });
  });
});
/**
 * @api {get} /admin/role 查看role - list数据
 * @apiName AdminRoleList
 * @apiGroup Role
 * @apiHeader {String} token  token
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '查看list数据',
 * data
 *  }
 */
router.get("/", (req, res, next) => {
  mysql.find(Banner, {}, { _id: 0, __v: 0 }).then((data) => {
    res.send({
      code: "200",
      message: "查看list数据",
      data,
    });
  });
});

/**
 * @api {delete} /admin/role/:roleId 删除单条数据
 * @apiName AdminRoleDelete
 * @apiGroup Role
 * @apiHeader {String} token  token
 * @apiParam {String} roleId  menuId
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '删除数据',
 * data
 *  }
 */
router.delete("/:roleId", (req, res, next) => {
  const { roleId } = req.params;
  mysql.delete(Banner, { menuId }, { _id: 0, __v: 0 }).then((data) => {
    res.send({
      code: "200",
      message: "删除单条数据",
    });
  });
});

/**
 * @api {patch} /admin/role/:roleId 更新数据
 * @apiName AdminRoleUpdateFlag
 * @apiGroup Role
 * @apiHeader {String} token  token
 * @apiParam {String} roleId  roleId
 * @apiBody {String} roleName
 * @apiBody {String} roleMenuArr
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '更新成功',
 * data
 *  }
 */
router.patch("/:roleId", (req, res, next) => {
  const { roleId } = req.params;
  const body = req.body;
  mysql.update(Banner, { roleId }, { $set: body }).then(() => {
    res.send({
      code: "200",
      message: "更新成功",
    });
  });
});
module.exports = router;
