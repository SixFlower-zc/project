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
      //layout程序 主体--页面  点击侧边栏 切换 右侧的内容
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue")
        },
        {
          path: "/ProductManager",
          name: "product",
          component: () => import("../views/ProductManager.vue")
        },
        {
          path: "/ProductAdd",
          name: "product-add",
          component: () => import("../views/ProductAddView.vue")
        },
        {
          path: "/SwiperManager",
          name: "swiper",
          component: () => import("../views/SwiperManager.vue")
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

export default router;
