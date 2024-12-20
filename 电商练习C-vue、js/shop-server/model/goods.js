const fs = require("fs");
const path = require("path");

const getList = async (c, p, s, f, st, sortT, sortM, category) => {
  const data = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  let list = JSON.parse(data);

  if (category) list = list.filter((item) => item.category === category);

  if (s)
    list = list.filter(
      (item) =>
        item.title.search(s) !== -1 ||
        item.goods_introduce.search(s) !== -1 ||
        item.price.search(s) !== -1
    );

  if (f) {
    const tmp = f.split(",");
    tmp.forEach((item) => {
      if (item === "hot") list = list.filter((t) => t.is_hot);
      if (item === "sale") list = list.filter((t) => t.is_sale);
    });
  }

  if (st !== "100%") list = list.filter((item) => item.sale_type === st);

  switch (sortT) {
    case "id":
      list.sort((a, b) =>
        sortM === "ASC" ? a.goods_id - b.goods_id : b.goods_id - a.goods_id
      );
      break;
    case "price":
      list.sort((a, b) =>
        sortM === "ASC" ? a.price - b.price : b.price - a.price
      );
      break;
    case "sale":
      list.sort((a, b) =>
        sortM === "ASC"
          ? parseInt(a.sale_type) - parseInt(b.sale_type)
          : parseInt(b.sale_type) - parseInt(a.sale_type)
      );
      break;
  }

  return {
    list: list.slice((c - 1) * p, c * p),
    total: Math.ceil(list.length / p),
  };
};

const getGoodsById = async (id) => {
  const data = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  return JSON.parse(data).find((item) => item.goods_id === id);
};

const category = async () => {
  const data = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  const goods = JSON.parse(data);
  const arr = [];

  goods.forEach((item) => arr.push(item.category));

  return [...new Set(arr)];
};

let removeGoosById = async (goods_id) => {
  const data = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  let goodsList = JSON.parse(data);
  console.log(goods_id);
  goodsList = goodsList.filter((v) => v.goods_id != goods_id);
  fs.writeFileSync(
    path.join(__dirname, "../db/goods.json"),
    JSON.stringify(goodsList)
  );

  return "ok";
};
let updateGoosById = async (goods_id, body) => {
  console.log(body);
  const data = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  let goodsList = JSON.parse(data);
  console.log(goods_id);
  let obj = goodsList.find((v) => v.goods_id == goods_id);
  // let index = goodsList.findIndex((v) => v.goods_id != goods_id);

  for (let key in body) {
    obj[key] = body[key];
  }

  // goodsList[index] = obj;
  console.log(obj);
  fs.writeFileSync(
    path.join(__dirname, "../db/goods.json"),
    JSON.stringify(goodsList)
  );

  return "ok";
};

const addGoods = async (
  title,
  img_big_logo,
  // current_price,
  category = "其他",
  goods_number = 10,
  goods_introduce,
  price,
  sale_type = 1
) => {
  let obj = {
    goods_id: 1,
    title,
    img_big_logo,
    price,
    current_price: price * sale_type,
    goods_number,
    is_sale: true,
    sale_type: sale_type * 100 + "%",
    is_hot: false,
    category,
    goods_introduce,
  };
  const data2 = await fs.readFileSync(
    path.join(__dirname, "../db/goods.json"),
    "utf-8"
  );
  console.log(typeof data2);
  let arr = JSON.parse(data2);
  console.log(typeof arr);
  let goods_idArr = arr.map((v) => v.goods_id - 0);
  let maxId = Math.max(...goods_idArr);
  obj.goods_id = maxId + 1;
  arr.unshift(obj);

  // const goods = cart.find((item) => item.goods_id === gId);
  fs.writeFileSync(
    path.join(__dirname, "../db/goods.json"),
    JSON.stringify(arr)
  );
};

module.exports = {
  getList,
  getGoodsById,
  category,
  addGoods,
  removeGoosById,
  updateGoosById,
};
