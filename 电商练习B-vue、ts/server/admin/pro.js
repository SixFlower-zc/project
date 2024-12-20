const router = require("express").Router();
const xlsx = require("node-xlsx");
// const nodeExcel = require('excel-export')
const urlencode = require("urlencode");
const sql = require("./../mysql");
const Product = require("./../mysql/collection/Product");
// const utils = require('./../utils')
const uuid = require("uuid");
/**
 * @api {get} /admin/pro/detail 详情
 * @apiName ProDetail
 * @apiGroup Pro
 *
 * @apiParam {string } proid  产品ID
 * @apiHeader {String} token token
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "详情",
 *       "data": []
 *     }
 */
router.get("/detail", (req, res, next) => {
  sql
    .find(Product, { proid: req.query.proid }, { _id: 0, __v: 0 })
    .then((data) => {
      res.status(200).send({
        code: "200",
        message: "获取商品的详情",
        data,
      });
    });
});

/**
 * @api {post} /admin/pro/showdata 获取秒杀或者推荐的列表
 * @apiName PostShowData
 * @apiGroup Pro
 *
 * @apiParam {string } type  获取数据的依据 （isseckill, isrecommend）
 * @apiParam { number } flag  表示（1 选中 0 未选中）
 * @apiHeader {String} token token
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "获取秒杀或者推荐的列表",
 *       "data": []
 *     }
 * @apiSampleRequest /admin/pro/showdata
 */
router.post("/showdata", (req, res, next) => {
  let { type, flag } = req.body;
  let whereData = {};
  whereData[type] = flag;
  sql.find(Product, whereData, { _id: 0, __v: 0 }).then((data) => {
    res.status(200).send({
      code: "200",
      message: "获取商品的列表",
      data,
    });
  });
});

/**
 * @api {get} /admin/pro/list 获取商品的列表或者搜索商品
 * @apiName GetProList
 * @apiGroup Pro
 *
 * @apiParam { Number } count 页码，默认值为1
 * @apiParam {Number } limitNum 每页显示个数，默认值为10
 * @apiParam {String } search 搜索的商品名
 * @apiParam {String } category 分类名
 *
 * @apiHeader {String} token token
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {Number} total  商品的总数量
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "获取商品的列表",
 *       "total": len,
 *       "data": []
 *     }
 * @apiSampleRequest /admin/pro/list
 */
router.get("/list", (req, res, next) => {
  let { count, limitNum, search, category } = req.query;
  count *= 1;
  limitNum *= 1;
  let whereData = {};
  if (search) {
    whereData = { ...whereData, proname: new RegExp(search) };
  }
  if (category) {
    whereData = { ...whereData, category };
  }
  sql
    .paging(Product, whereData, { _id: 0, __v: 0 }, count, limitNum, {
      _id: -1,
    })
    .then((data) => {
      sql.count(Product, whereData).then((len) => {
        console.log(len);
        console.log(whereData);
        res.status(200).send({
          code: "200",
          message: "获取商品的列表",
          total: len,
          data,
        });
      });
    });
});

/**
 * @api {get} /admin/pro/getCategory 获取商品的分类
 * @apiName GetCategory
 * @apiGroup Pro

 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} data  数据
 * @apiHeader {String} token token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "获取商品的分类",
 *        data
 *     }
 * @apiSampleRequest /admin/pro/getCategory
 */
router.get("/getCategory", (req, res, next) => {
  sql.distinct(Product, "category").then((data) => {
    res.status(200).send({
      code: "200",
      message: "获取商品的分类",
      data,
    });
  });
});
/**
 * @api {post} /admin/pro/searchPro 筛选商品
 * @apiName PostSearchPro
 * @apiGroup Pro
 *
 * @apiParam { string } category 分类
 * @apiParam {string } search 搜索关键词
 * @apiHeader {String} token token
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "筛选商品",
 *       "data": []
 *     }
 * @apiSampleRequest /admin/pro/searchPro
 */
router.post("/searchPro", (req, res, next) => {
  let { category, search } = req.body;
  let whereData = {};
  // if (category === '') {
  //   if (search === '') {
  //     whereData = {}
  //   } else {
  //     whereData = {
  //       proname: new RegExp(search)
  //     }
  //   }
  // } else {
  //   if (search === '') {
  //     whereData = {
  //       category
  //     }
  //   } else {
  //     whereData = {
  //       category,
  //       proname: new RegExp(search)
  //     }
  //   }
  // }
  category === ""
    ? search === ""
      ? (whereData = {})
      : (whereData.proname = new RegExp(search))
    : search === ""
    ? (whereData.category = category)
    : (whereData = {
        category,
        proname: new RegExp(search),
      });
  sql.find(Product, whereData, { _id: 0, __v: 0 }).then((data) => {
    res.status(200).send({
      code: "200",
      message: "筛选商品",
      data,
    });
  });
});

// router.get('/updateIsSeckill', (req, res, next) => {
//   let { isseckill, proid } = req.query
//   isseckill = isseckill === 'true' ? 1 : 0
//   sql.update(Product, { proid }, { $set: { isseckill }}).then(() => {
//     res.status(200).send({
//       code: '200',
//       message: '修改商品是否参加秒杀'
//     })
//   })
// })
/**
 * @api {post} /admin/pro/updateFlag 修改商品是否推荐或者秒杀或者售卖
 * @apiName PostUpdateFlag
 * @apiGroup Pro
 *
 * @apiParam { string } proid 产品的id
 * @apiParam {string } type 修改的数据 （isseckill, isrecommend，issale）
 * @apiParam { string } flag  表示（true 选中 false 未选中）
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiHeader {String} token token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "修改商品是否推荐或者秒杀",
 *     }
 * @apiSampleRequest /admin/pro/updateFlag
 */
router.post("/updateFlag", (req, res, next) => {
  let { proid, type, flag } = req.body;
  console.log("111111", typeof flag);
  flag = flag ? 1 : 0;
  let updateData = {};
  updateData[type] = flag;

  sql.update(Product, { proid }, { $set: updateData }).then(() => {
    res.status(200).send({
      code: "200",
      message: "修改商品" + type + "为" + flag,
    });
  });
});

/**
 * @api {patch} /admin/pro/product/:proid 修改商品信息
 * @apiName patchProduct
 * @apiGroup Pro
 *
 * @apiParam { string } proid 产品的id
 * @apiParam {Object } body 修改的数据 {proname,originprice，desc,brand}
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiHeader {String} token token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "修改商品是否推荐或者秒杀",
 *     }
 * @apiSampleRequest /admin/pro/updateFlag
 */
router.patch("/product/:proid", (req, res, next) => {
  sql
    .update(Product, { proid: req.params.proid }, { $set: req.body })
    .then(() => {
      res.status(200).json({
        code: "200",
        message: "修改商品成功",
      });
    });
});

/**
 * @api {post} /admin/pro/product 发布商品
 * @apiName PostProduct
 * @apiGroup Pro
 *
 * @apiParam { string } proname 产品的名称
 * @apiParam {string } originprice 商品的价格
 * @apiParam {string } desc 商品的详情
 * @apiParam {string } brand 商品的品牌
 * @apiParam {string } category 商品的分类
 * @apiParam { string } img1 商品的图片1
 * @apiParam { string } img2 商品的图片2
 * @apiParam { string } img3 商品的图片3
 * @apiParam { string } img4 商品的图片4
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiHeader {String} token token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "发布商品成功",
 *     }
 * @apiSampleRequest /admin/pro/updateFlag
 */
router.post("/product", (req, res, next) => {
  let {
    category,
    brand,
    proname,
    banners,
    originprice,
    stock = 10,
    desc,
    issale = 1,
    isrecommend = 0,
    discount = 10,
    isseckill = 0,
    img1,
    img2,
    img3,
    img4,
    imgs,
  } = req.body;
  let insertData = {
    proid: "pro_" + uuid.v4(),
    category, //手机 电视
    brand, //apple 苹果
    proname, // 商品名称
    banners, // 重组数据，也可以按照 ， 分割 图片字符串，用逗号隔开
    originprice, //原价
    sales: 0, //销量
    stock, //库存
    desc, //详情
    issale, //是否售卖
    isrecommend, //是否推荐
    discount, //折扣
    isseckill, //是否秒杀
    img1,
    img2,
    img3,
    img4,
    imgs: imgs || [img1, img2, img3, img4],
  };
  sql.insert(Product, insertData).then(() => {
    res.status(200).send({
      code: 200,
      message: "上传商品成功",
    });
  });
});

/**
 * @api {delete} /admin/pro/product/:proid 根据proid删除上传商品
 * @apiName deleteProduct
 * @apiGroup Pro
 * @apiParam { string } proid 产品的id
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiHeader {String} token token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "发布商品成功",
 *     }
 * @apiSampleRequest /admin/pro/updateFlag
 */
router.delete("/product/:proid", (req, res) => {
  sql.delete(Product, { proid: req.params.proid }).then(() => {
    res.status(200).send({
      code: 200,
      message: "删除商品成功",
    });
  });
});

router.get("/uploadProduct", (req, res, next) => {
  // 清空数据
  sql.delete(Product, {}, 1).then(() => {
    // 导入数据
    const originData = xlsx.parse(__dirname + "/pro.xlsx")[0].data; // [[字段名], [数据], [数据], [数据]]
    const insertData = [];
    originData.forEach((item, index) => {
      if (index !== 0) {
        insertData.push({
          proid: "pro_" + uuid.v4(),
          category: item[0],
          brand: item[1],
          proname: item[2],
          banners: item[3].split(","), // 重组数据，也可以按照 ， 分割item[3]
          originprice: item[4],
          sales: item[5],
          stock: item[6],
          desc: item[7],
          issale: item[8],
          isrecommend: item[9],
          discount: item[10],
          isseckill: item[11],
          img1: item[12],
          img2: item[13],
          img3: item[14],
          img4: item[15],
        });
      }
    });
    sql.insert(Product, insertData).then(() => {
      res.status(200).send({
        code: 200,
        message: "上传数据",
      });
    });
  });
});

router.get("/exportProduct", (req, res, next) => {
  // 请求数据库的数据
  sql.find(Product, {}, { _id: 0, __v: 0, proid: 0 }).then((data) => {
    const rowsarr = [];
    data.forEach((item) => {
      const row = [];
      row[0] = item.category;
      row[1] = item.brand;
      row[2] = item.proname;
      row[3] = item.banners;
      row[4] = item.originprice;
      row[5] = item.sales;
      row[6] = item.stock;
      row[7] = item.desc;
      row[8] = item.issale;
      row[9] = item.isrecommend;
      row[10] = item.discount;
      row[11] = item.isseckill;
      row[12] = item.img1;
      row[13] = item.img2;
      row[14] = item.img3;
      row[15] = item.img4;
      rowsarr.push(row);
    });
    rowsarr.unshift([
      // 添加表头
      "分类",
      "品牌",
      "商品名称",
      "轮播图",
      "原价",
      "销量",
      "库存",
      "描述",
      "上架状态",
      "是否推荐",
      "折扣",
      "是否秒杀",
      "图1",
      "图2",
      "图3",
      "图4",
    ]);
    var buffer = xlsx.build([{ name: "商品列表", data: rowsarr }]);
    res.setHeader("Content-Type", "application/octet-stream");
    // 加时间戳是为了不要生成 （1） （2） 类型文件
    let name = urlencode("商品列表_" + +new Date() + ".xlsx", "utf-8");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename* = UTF-8''" + name
    );
    res.send(buffer);
  });
});

module.exports = router;
