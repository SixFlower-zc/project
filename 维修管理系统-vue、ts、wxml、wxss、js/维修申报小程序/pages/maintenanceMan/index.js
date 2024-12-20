const { http } = require("../../utils/http");

// pages/maintenanceMan/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    maintenanceMan: [
      {
        id: "RP202410001",
        name: "李四",
        phone: "12345678910",
        level: "高级工程师",
        skills: ["电气维修", "空调维修"],
        certificate: ["Cisco认证网络工程师"],
        remarks: "具有丰富的现场维修经验",
        TotalOrders: ["WO202410001", "WO202410002"],
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const data = await http({
      url: "/maintenanceMan",
    });
    this.setData({
      maintenanceMan: data.data,
    });
    console.log(this.data);
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
