Page({
  data: {
    marqueeItems: [
      "最新公告：维修工培训将于下周一开始，请各位维修工提前做好准备！",
      "通知：所有工单请在24小时内完成，超时将影响绩效！",
      "提醒：请保持工具箱的整洁，及时补充工具！",
    ],
    scrollPosition: 0,
    scrolling: true,
  },

  onLoad: function () {
    this.startMarquee();
  },

  startMarquee: function () {
    const that = this;
  },
});
