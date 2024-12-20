const router = require("express").Router();

const multer = require("multer");

// 设置存储配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); // 确保这个文件夹已经存在
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// 处理上传的图片
router.post("/", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  let url = "http://localhost:8888/images/" + file.filename;
  if (!file) {
    return res.status(400).send({
      code: 0,
      message: "上传图片失败，没有图片",
    });
  }
  res.send({
    code: 1,
    message: "上传图片成功",
    url,
  });
});

module.exports = router;
