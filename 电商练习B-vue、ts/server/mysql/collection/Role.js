const mongoose = require("../db");
const schema = new mongoose.Schema({
  roleId: String,
  roleName: String,
  roleMenuArr: Array,
});

module.exports = mongoose.model("Role", schema);
