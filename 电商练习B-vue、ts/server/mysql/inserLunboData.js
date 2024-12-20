const mysql = require("./../mysql");
const Banner = require("./../mysql/collection/Banner");
const uuid = require("uuid");
const arr = require("./bannerInitData");

function insertOneBanner(img, alt = "img", link = img, flag = true) {
  let insertData = { img, alt, link, flag };
  insertData.bannerid = "banner_" + uuid.v4();
  insertData.flag = true;
  mysql.insert(Banner, insertData).then(() => {});
}

function main() {
  mysql.count(Banner).then((r) => {
    if (r == 0) {
      console.log("插入轮播数据");
      arr.forEach((v) => {
        insertOneBanner(v.img);
      });
    }
  });
}
module.exports = main;
