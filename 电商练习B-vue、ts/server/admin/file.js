// 该文件实现两个接口
// 1. 上传文件
// 2. 查看文件

const router = require("express").Router();
// 引入 path 模块，处理文件路径
const path = require("path");
// 引入 multer 模块
const multer = require("multer");
// 创建一个 multer 的中间件
var storage = multer.diskStorage({
  //上传图片的路径
  destination: function (req, file, cb) {
    console.log(file, "des");
    cb(null, "./public/upload");
  },
  filename: function (req, file, cb) {
    console.log(file, "filename");
    //path.extname(file.originalname) 获取前端上传图片的 后缀名
    //文件名字 以上传的时间戳为文件的名字
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
// var upload = multer({ storage: storage }).single("img");
/**
 * @api {post} /admin/file/upload 上传图片
 * @apiName UploadImage
 * @apiGroup 上传图片
 * @apiParam { FormData } img 图片的formData
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述
 * @apiSuccess {String} fileUrl  返回图片的地址
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
router.post(
  "/upload",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    // 用上 upload 文件上传中间件之后，req 对象上会有一个 file 属性
    console.log(req.file, "router-upload");
    // 响应给前端的数据应该是一个图片的访问地址
    const fileUrl = `http://localhost:3001/upload/${req.file.filename}`;
    res.json({ fileUrl });
  }
);

/**
 * 2. 查看文件
 */
router.get("/:id", (req, res) => {
  // 1. 得到文件的绝对路径
  // const filePath = path.resolve(__dirname, '../upload', req.params.id)
  // // console.log('path', filePath)
  // // console.log('id', req.params.id)
  // // 2. sendFile 该文件
  // res.sendFile(filePath, {
  //   headers: {
  //     "Content-type": 'image/jpeg'
  //   }
  // })

  res.sendFile(req.params.id, {
    root: "./upload",
    headers: {
      "Content-type": "image/jpeg",
    },
  });
});

module.exports = router;
