const router = require("express").Router();
const mysql = require("../mysql");
const Banner = require("../mysql/collection/Menu");
const uuid = require("uuid");
/**
 * @api {post} /admin/menu 添加menu菜单数据
 * @apiName AdminMenuAdd
 * @apiGroup Menu
 * @apiHeader {String} token  token
 * @apiBody {String} menuUrl menu地址
 * @apiBody {String} menuName menu名称
 * @apiBody {String} menuIcon menu图标名称
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '插入数据'
 *  }
 */
router.post("/", (req, res, next) => {
  const insertData = req.body;
  insertData.menuId = "menu_" + uuid.v4();
  mysql.insert(Banner, insertData).then(() => {
    res.send({
      code: "200",
      message: "插入数据",
    });
  });
});
/**
 * @api {get} /admin/menu 查看menu - list数据
 * @apiName AdminMenuList
 * @apiGroup Menu
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
 * @api {delete} /admin/menu/:mid 删除单条数据
 * @apiName AdminMenuDelete
 * @apiGroup Menu
 * @apiHeader {String} token  token
 * @apiParam {String} menuId  menuId
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '删除数据',
 * data
 *  }
 */
router.delete("/:menuId", (req, res, next) => {
  const { menuId } = req.params;
  mysql.delete(Banner, { menuId }, { _id: 0, __v: 0 }).then((data) => {
    res.send({
      code: "200",
      message: "删除单条数据",
    });
  });
});

/**
 * @api {patch} /admin/menu/:menuId 更新数据
 * @apiName AdminMenuUpdateFlag
 * @apiGroup Menu
 * @apiHeader {String} token  token
 * @apiParam {String} menuId  menuId
 * @apiBody {String} menuUrl
 * @apiBody {String} menuName
 * @apiBody {String} menuIcon
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '更新成功',
 * data
 *  }
 */
router.patch("/:menuId", (req, res, next) => {
  const { menuId } = req.params;
  const body = req.body;
  mysql.update(Banner, { menuId }, { $set: body }).then(() => {
    res.send({
      code: "200",
      message: "更新成功",
    });
  });
});
module.exports = router;
