// pages/online/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    messages: [],
    userInput: "",
  },

  onInput(e) {
    this.setData({
      userInput: e.detail.value,
    });
  },

  sendMessage() {
    const { userInput, messages } = this.data;

    if (userInput.trim() === "") {
      wx.showToast({
        title: "请输入内容",
        icon: "none",
      });
      return;
    }

    // 添加用户消息
    messages.push({ type: "user", content: userInput });
    this.setData({
      messages,
      userInput: "",
    });

    // 模拟客服回复
    setTimeout(() => {
      messages.push({ type: "bot", content: "谢谢您的提问，我会尽快回复您!" });
      this.setData({ messages });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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
