const { http } = require("../../utils/http");
const { debounce } = require("../../utils/debounce");
const { throttle } = require("../../utils/throttle");
const { setUserInfo, getUserInfo } = require("../../utils/setgetUserInfo");

// pages/login/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    showMs: "",
    toptipType: "error",
  },

  toptipShow(showMs, toptipType = "error") {
    this.toptipShowFn(showMs, toptipType);
  },

  // 登录
  async handleLogin() {
    // 检查是否填写账号与密码
    if (this.data.username === "") {
      this.toptipShow("请输入账户");
      return;
    }
    if (this.data.password === "") {
      this.toptipShow("请输入密码");
      return;
    }
    const data = await http({
      url: "/user",
      data: {
        username: this.data.username,
      },
    });
    switch (true) {
      // 账户不存在
      case data.data.length === 0:
        this.toptipShow("该账户不存在");
        break;
      // 账号存在
      case data.data.length === 1:
        if (data.data[0].password === this.data.password) {
          // 密码正确
          this.toptipShow("登录成功", "success");
          await setUserInfo(data.data[0].id);
          wx.switchTab({
            url: "/pages/home/index",
          });
        } else {
          // 密码错误
          this.setData({ password: "" });
          this.toptipShow("密码错误");
        }
        break;
      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // 错误弹窗提示+节流
    // 防连点时WeUI提示框乱闪
    this.toptipShowFn = throttle((showMs, toptipType) => {
      this.setData({ showMs, toptipType });
    }, 900);
    const userInfo = getUserInfo("userInfo");
    if (userInfo) {
      const data = (
        await http({
          url: "/user",
          data: {
            username: userInfo.username,
          },
        })
      ).data[0];
      if (
        userInfo.username === data.username &&
        userInfo.password === data.password
      ) {
        // 本地储存有账号且账密正确直接跳转
        wx.switchTab({
          url: "/pages/home/index",
        });
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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
