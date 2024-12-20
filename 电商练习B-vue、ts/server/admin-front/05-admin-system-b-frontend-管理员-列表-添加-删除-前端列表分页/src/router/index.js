import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/",
      name: "layout",
      component: () => import("../views/Layout.vue"),
      redirect: "/home",
      meta: { requireLogin: true },
      //layout程序 主体--页面  点击侧边栏 切换 右侧的内容
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
          meta: { requireLogin: true, title: "首页" }
        },
        {
          path: "/ProductManager",
          name: "商品管理",
          redirect: "/ProductManager/list",
          children: [
            {
              path: "/ProductManager/list",
              name: "商品列表",
              component: () => import("../views/ProductManager.vue"),
              meta: { requireLogin: true, title: "商品列表" }
            },
            {
              path: "/ProductManager/add",
              name: "商品发布",
              component: () => import("../views/ProductAddView.vue"),
              meta: { requireLogin: true, title: "商品发布" }
            }
          ]
        },
        {
          path: "/SwiperManager",
          name: "swiper",
          component: () => import("../views/SwiperManager.vue"),
          meta: { requireLogin: true, title: "轮播图管理" }
        },
        {
          path: "/AdminManager",
          name: "admin",
          component: () => import("../views/AdminManager.vue"),
          meta: { requireLogin: true, title: "管理员管理" }
        }
      ]
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }

    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/AboutView.vue")
    // }
  ]
});
/* 
  登录权限
  1-在路由配置 给meta字段添加 标记 requireLogin
  2-全局路由前置守卫-做判断
*/

router.beforeEach((to, from) => {
  //
  if (to.meta.requireLogin === true) {
    //需要登录
    let token = localStorage.getItem("token");
    if (token == null) {
      return { path: "/login" };
    }
  } else {
    // 不需要登录
  }
});

export default router;
