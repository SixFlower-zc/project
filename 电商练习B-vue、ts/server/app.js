var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
var axios = require("axios");
var inserAdmin = require("./mysql/test");
var inserBanner = require("./mysql/inserLunboData");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// restful
var porApiRouter = require("./api/pro");
var userApiRouter = require("./api/user");
var cartApiRouter = require("./api/cart");
var addressApiRouter = require("./api/Address");
var orderApiRouter = require("./api/order");
var bannerApiRouter = require("./api/banner");
var cityApiRouter = require("./api/city");
var otherApiRouter = require("./api/other");
// admin
var bannerAdminRouter = require("./admin/banner");
var statisticAdminRouter = require("./admin/statistic");
var proAdminRouter = require("./admin/pro");
var adminAdminRouter = require("./admin/admin");
var userAdminRouter = require("./admin/user");
var cartAdminRouter = require("./admin/cart");
var addressAdminRouter = require("./admin/address");
var searchAdminRouter = require("./admin/search");
var orderAdminRouter = require("./admin/order");
var dataAdminRouter = require("./admin/data");
var fileAdminRouter = require("./admin/file");
var roleAdminRouter = require("./admin/admin-role");
var menuAdminRouter = require("./admin/admin-menu");
const { decode } = require("punycode");

var app = express();
// app.io = dataAdminRouter.io

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/out")));

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型， content-type
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header(
    "Access-Control-Allow-Methods",
    "DELETE,PUT,POST,GET,OPTIONS,PATCH"
  );
  next();
});

app.all("/api/cart/*", (req, res, next) => {
  const token = req.headers.token || req.query.token || req.body.token;
  if (token) {
    jwt.verify(token, "bk2007", (err, decoded) => {
      if (err) {
        res.send({
          code: "10119",
          message: "token无效",
        });
      } else {
        req.decoded = decoded;
        next(); // 中间件
      }
    });
  } else {
    res.send({
      code: "10119",
      message: "token无效",
    });
  }
});

app.use("/api/pro", porApiRouter);
app.use("/api/user", userApiRouter);
app.use("/api/cart", cartApiRouter);
app.use("/api/address", addressApiRouter);
app.use("/api/order", orderApiRouter);
app.use("/api/banner", bannerApiRouter);
app.use("/api/city", cityApiRouter);
app.use("/api/file", fileAdminRouter);
app.use("/api", otherApiRouter);

app.all("/admin/*", (req, res, next) => {
  const token = req.headers.token || req.query.token || req.body.token;

  console.log(req.url);
  if (req.url == "/admin/admin/login" || req.url.startsWith("/admin/file/")) {
    next();
  } else {
    if (token) {
      jwt.verify(token, "嗨购-admin", (err, decoded) => {
        if (err) {
          res.send({
            code: "10119",
            message: "token无效",
          });
        } else {
          req.decoded = decoded;
          next(); // 中间件
        }
      });
    } else {
      res.send({
        code: "10119",
        message: "token无效",
      });
    }
  }
});
// admin
app.use("/admin/banner", bannerAdminRouter);
app.use("/admin/statistic", statisticAdminRouter);
app.use("/admin/pro", proAdminRouter);
app.use("/admin/admin", adminAdminRouter);
app.use("/admin/user", userAdminRouter);
app.use("/admin/cart", cartAdminRouter);
app.use("/admin/address", addressAdminRouter);
app.use("/admin/search", searchAdminRouter);
app.use("/admin/order", orderAdminRouter);
app.use("/admin/data", dataAdminRouter);
app.use("/admin/file", fileAdminRouter);
app.use("/admin/role", roleAdminRouter);
app.use("/admin/menu", menuAdminRouter);

app.get("/admin/dashboard", (req, res) => {
  res.send({
    code: "200",
    message: "请求成功",
    data: {
      // 访问量
      visits: [
        { label: "1月", value: 8765 },
        { label: "2月", value: 4598 },
        { label: "3月", value: 13567 },
        { label: "4月", value: 4789 },
        { label: "5月", value: 9876 },
        { label: "6月", value: 5478 },
        { label: "7月", value: 3289 },
        { label: "8月", value: 13423 },
        { label: "9月", value: 6543 },
        { label: "10月", value: 7689 },
        { label: "11月", value: 8235 },
        { label: "12月", value: 6578 },
      ],
      // 区域排行
      regionRanking: [
        { label: "江西省", value: 90 },
        { label: "山西省", value: 90 },
        { label: "湖南省", value: 80 },
        { label: "福建省", value: 80 },
        { label: "河南省", value: 80 },
        { label: "浙江省", value: 60 },
        { label: "江苏省", value: 40 },
        { label: "四川省", value: 10 },
        { label: "广东省", value: 10 },
        { label: "上海省", value: 0 },
      ],
      // 销售额
      sales: [
        { label: "1月", current: 820, average: 620 },
        { label: "2月", current: 932, average: 712 },
        { label: "3月", current: 1002, average: 802 },
        { label: "4月", current: 901, average: 701 },
        { label: "5月", current: 954, average: 734 },
        { label: "6月", current: 934, average: 739 },
        { label: "7月", current: 1290, average: 1090 },
        { label: "8月", current: 1360, average: 1160 },
        { label: "9月", current: 1450, average: 1250 },
        { label: "10月", current: 1400, average: 1220 },
        { label: "11月", current: 1350, average: 1150 },
        { label: "12月", current: 1320, average: 1120 },
      ],
      // 访问来源
      source: [
        { label: "搜索引擎", value: 1048 },
        { label: "直接访问", value: 735 },
        { label: "邮件营销", value: 580 },
        { label: "联盟广告", value: 484 },
        { label: "视频广告", value: 300 },
      ],
    },
  });
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// 插入临时商品数据
setTimeout(function () {
  axios.get("http://localhost:3001/api/pro/list").then((r) => {
    let len = r.data.data.length;
    console.log("商品数据个数" + len);
    if (len == 0) {
      axios.get("http://localhost:3001/api/pro/uploadPro").then((r) => {
        console.log("导入初始商品成功");
      });
    }
  });
}, 5000);
// 插入管理员信息
setTimeout(() => {
  inserAdmin();
  inserBanner();
}, 3000);

module.exports = app;
