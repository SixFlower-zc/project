const { getUserInfo } = require("../../utils/setgetUserInfo");

// pages/my/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  myClick(e) {
    console.log(e.target.dataset.id);
    switch (e.target.dataset.id) {
      case "0":
        wx.navigateTo({
          url: "/pages/userInfo/index",
        });
        break;
      case "1":
        wx.navigateTo({
          url: "/pages/feedback/index",
        });
        break;
      case "2":
        wx.navigateTo({
          url: "/pages/about/index",
        });
        break;
      case "3":
        wx.navigateTo({
          url: "/pages/maintenanceMan/index",
        });
        break;
      case "4":
        wx.navigateTo({
          url: "/pages/online/index",
        });
        break;
      case "5":
        wx.navigateTo({
          url: "/pages/set/index",
        });
        break;
      default:
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo: getUserInfo("userInfo"),
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === "function") {
      this.getTabBar((tabBar) => {
        tabBar.setData({
          selected: 2,
        });
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
