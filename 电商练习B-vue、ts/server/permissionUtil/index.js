function getMenuListWithRole(role) {
  if (role == 1) {
    return [
      {
        id: 1,
        parent_id: 0,
        title: "首页",
        component: "HomeView",
        path: "/home",
        icon: "House",
        menuType: 1,
        // children: [],
      },
      {
        id: 2,
        parent_id: 0,
        title: "商品管理",
        component: "ProductManagerView",
        path: "/ProductManager",
        icon: "Goods",
        menuType: 1,
        children: [
          {
            id: 21,
            parent_id: 2,
            title: "商品列表",
            component: "ProductListView",
            path: "/ProductList",
            icon: "List",
            menuType: 2,
          },
          {
            id: 22,
            parent_id: 2,
            title: "商品发布",
            component: "ProductPubView",
            path: "/ProductPub",
            icon: "Magnet",
            menuType: 2,
          },
        ],
      },
      {
        id: 3,
        parent_id: 0,
        title: "轮播管理",
        component: "LunboManagerView",
        path: "/LunboManager",
        icon: "Present",
        menuType: 1,
        children: [
          {
            id: 31,
            parent_id: 3,
            title: "轮播列表",
            component: "LunboListView",
            path: "/LunboList",
            icon: "Reading",
            menuType: 2,
          },
          {
            id: 32,
            parent_id: 3,
            title: "轮播发布",
            component: "LunboPubView",
            path: "/LunboPub",
            icon: "Magnet",
            menuType: 2,
          },
        ],
      },
      {
        id: 4,
        parent_id: 0,
        title: "用户管理",
        component: "UserManagerView",
        path: "/UserManager",
        icon: "User",
        menuType: 1,
        children: [
          {
            id: 41,
            parent_id: 4,
            title: "用户列表",
            component: "UserListView",
            path: "/UserList",
            icon: "UserFilled",
            menuType: 2,
          },
          {
            id: 42,
            parent_id: 4,
            title: "用户添加",
            component: "UserPubView",
            path: "/UserPub",
            icon: "CirclePlus",
            menuType: 2,
          },
        ],
      },
    ];
  } else if (role == 2) {
    return [
      {
        id: 1,
        parent_id: 0,
        title: "首页",
        component: "HomeView",
        path: "/home",
        icon: "House",
        menuType: 1,
        // children: [],
      },
      {
        id: 2,
        parent_id: 0,
        title: "商品管理",
        component: "ProductManagerView",
        path: "/ProductManager",
        icon: "Goods",
        menuType: 1,
        children: [
          {
            id: 21,
            parent_id: 2,
            title: "商品列表",
            component: "ProductListView",
            path: "/ProductList",
            icon: "List",
            menuType: 2,
          },
          {
            id: 22,
            parent_id: 2,
            title: "商品发布",
            component: "ProductPubView",
            path: "/ProductPub",
            icon: "Magnet",
            menuType: 2,
          },
        ],
      },
      {
        id: 3,
        parent_id: 0,
        title: "轮播管理",
        component: "LunboManagerView",
        path: "/LunboManager",
        icon: "Present",
        menuType: 1,
        children: [
          {
            id: 31,
            parent_id: 3,
            title: "轮播列表",
            component: "LunboListView",
            path: "/LunboList",
            icon: "Reading",
            menuType: 2,
          },
          {
            id: 32,
            parent_id: 3,
            title: "轮播发布",
            component: "LunboPubView",
            path: "/LunboPub",
            icon: "Magnet",
            menuType: 2,
          },
        ],
      },
    ];
  }
}

function getpermissionBtnListWithRole(role) {
  if (role == 1) return ["productDel", "productUpdate"];
  if (role == 2) return ["productUpdate"];
}

module.exports = { getMenuListWithRole, getpermissionBtnListWithRole };
