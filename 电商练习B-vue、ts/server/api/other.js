const router = require("express").Router();

var categories = require("../jsons/categories.json");
var channels = require("../jsons/channels.json");
var seat1 = require("../jsons/seat1.json");
var menus = require("../jsons/menus.json");

// api
// 菜单列表

/**
 * @api {get} /api/menu/list 查看菜单数据
 * @apiName GetMenuList
 * @apiGroup Menu
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '查看菜单数据',
 *    data
 *  }
 */
router.get("/menu/list", (req, res) => {
  console.log(menus);
  res.send({
    code: 200,
    message: "获取菜单列表数据成功",
    data: menus,
  });
});

// 分类列表

/**
 * @api {get} /api/category/list 查看分类数据
 * @apiName GetCategoryList
 * @apiGroup category
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '查看分类数据',
 *    data
 *  }
 */
router.get("/category/list", (req, res) => {
  res.send({
    code: 200,
    message: "获取分类列表数据成功",
    data: categories,
  });
});

// 频道列表

/**
 * @api {get} /api/channel/list 查看频道
 * @apiName GetChannelList
 * @apiGroup channel
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '查看分类数据',
 *    data
 *  }
 */
router.get("/channel/list", (req, res) => {
  res.send({
    code: 200,
    message: "获取频道列表数据成功",
    data: channels,
  });
});

// 获取电影院座位
router.get("/cinema/seat1", (req, res) => {
  res.send({
    code: 200,
    message: "获取电影院座位成功",
    data: seat1,
  });
});

module.exports = router;
