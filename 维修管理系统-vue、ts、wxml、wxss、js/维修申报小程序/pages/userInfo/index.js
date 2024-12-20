const { http } = require("../../utils/http");
const { getUserInfo } = require("../../utils/setgetUserInfo");

// pages/userInfo/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnText: "修改信息",
  },

  async handleclick() {
    this.setData({
      btnText: this.data.btnText === "修改信息" ? "保存信息" : "修改信息",
    });
    if (this.data.btnText === "修改信息") {
      const data = await http({
        url: "/user/" + this.data.id,
        method: "PATCH",
        data: {
          name: this.data.name,
          age: this.data.age,
          gender: this.data.gender,
          phone: this.data.phone,
          address: this.data.address,
          remarks: this.data.remarks,
        },
      });
      console.log(data);
      if (this.data.role === "0") {
        http({
          url: "/households/" + this.data.id,
          method: "PATCH",
          data: {
            username: this.data.username,
            password: this.data.password,
          },
        });
      } else {
        http({
          url: "/maintenanceMan/" + this.data.id,
          method: "PATCH",
          data: {
            username: this.data.username,
            password: this.data.password,
          },
        });
      }
    }
    console.log(this.data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ ...getUserInfo() });
    console.log(getUserInfo());
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
