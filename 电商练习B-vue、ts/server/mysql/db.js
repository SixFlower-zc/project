const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/hi-buy";

// 连接数据库
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// 检测数据库的连接状态
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
});

mongoose.connection.on("error", () => {
  console.error.bind(console, "connection error:");
});
module.exports = mongoose;
