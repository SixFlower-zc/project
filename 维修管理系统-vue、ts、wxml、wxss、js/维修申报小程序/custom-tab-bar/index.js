const { getUserInfo } = require("../utils/setgetUserInfo");

Component({
  data: {
    selected: 0,
    color: "#2c2c2c",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "/pages/home/index",
        text: "首页",
        selectedIconPath: "/assets/icon/activate/home.png",
        iconPath: "/assets/icon/unactivate/home.png",
        role: 2,
      },
      {
        pagePath: "/pages/order/index",
        text: "订单",
        selectedIconPath: "/assets/icon/activate/order.png",
        iconPath: "/assets/icon/unactivate/order.png",
        role: 0,
      },
      {
        pagePath: "/pages/management/index",
        text: "管理",
        selectedIconPath: "/assets/icon/activate/management.png",
        iconPath: "/assets/icon/unactivate/management.png",
        role: 1,
      },
      {
        pagePath: "/pages/my/index",
        text: "我的",
        selectedIconPath: "/assets/icon/activate/my.png",
        iconPath: "/assets/icon/unactivate/my.png",
        role: 2,
      },
    ],
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      // this.setData({
      //   selected: data.index,
      // });
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const userInfo = getUserInfo();
      this.setData({
        list: [
          ...this.data.list.filter(
            (v) => v.role == userInfo.role || v.role === 2,
          ),
        ],
      });
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
});
