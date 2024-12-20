const router = require("express").Router();
// 中间件-参数校验中间件
const { getList: MGT, getGoodsById: MGBI } = require("../../middleware/goods");

// 验证token中间件
// const { verifyToken: verifyToken } = require("../../middleware/cart");
// const { pauseToken: PT } = require("../../utils/token");
const jwt = require("jsonwebtoken");

// 控制器
const {
  getList: getList,
  getGoodsById: getGoodsById,
  category,
  addGoods,
  removeGoosByIdController,
  updateGoosByIdController,
} = require("../../controller/goods");

router.use((req, res, next) => {
  console.log("admin-goods");
  console.log(req.url);
  const { authorization: token } = req.headers;
  console.log(token);

  jwt.verify(token, "guoxiang", (error, decoded) => {
    console.log(decoded);
    if (error) {
      res.json({ code: 0, message: error });
    } else {
      next();
    }
  });
});
// 列表 可用
router.get(
  "/",
  MGT,

  getList
);
router.get("/:id", MGBI, getGoodsById);
router.get("/category", category);
router.post(
  "/",

  addGoods
);
// 删除 可用
router.delete("/:goods_id", removeGoosByIdController);
// 修改 可用
router.patch("/:goods_id", updateGoosByIdController);

module.exports = router;
