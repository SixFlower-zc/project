const mongoose = require("../db");
const schema = new mongoose.Schema({
  menuId: String,
  menuUrl: String,
  menuName: String,
  menuIcon: String,
});

module.exports = mongoose.model("Menu", schema);
