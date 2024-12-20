const { http } = require("./http");

async function setUserInfo(id) {
  const AccountSecret = (
    await http({
      url: "/user/" + id,
    })
  ).data;
  let userInfo = (
    await http({
      url: "/households/" + id,
    })
  ).data;
  if (userInfo === "Not Found") {
    userInfo = (
      await http({
        url: "/maintenanceMan/" + id,
      })
    ).data;
  }
  wx.setStorageSync("userInfo", { ...AccountSecret, ...userInfo });
}

function clearUserInfo() {
  wx.setStorageSync("userInfo", {});
}

function getUserInfo() {
  return wx.getStorageSync("userInfo");
}

module.exports = {
  setUserInfo,
  getUserInfo,
  clearUserInfo,
};
