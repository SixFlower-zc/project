import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LayoutView.vue'
import { useUserInfo } from '@/stores/userInfo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: HomeView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () =>
            import('@/views/home/HomeView.vue'),
          meta: {
            title: '首页',
          },
        },
        {
          path: '/workOrder/Approval',
          name: 'workOrderApproval',
          component: () =>
            import(
              '@/views/workOrder/workOrderApprovalView.vue'
            ),
          meta: {
            title: '订单审批',
          },
        },
        {
          path: '/workOrder/list',
          name: 'workOrderList',
          component: () =>
            import(
              '@/views/workOrder/workOrderListView.vue'
            ),
          meta: {
            title: '工单列表',
          },
        },
        {
          path: '/workOrder/up',
          name: 'workOrderUp',
          component: () =>
            import('@/views/workOrder/workOrderUpView.vue'),
          meta: {
            title: '工单上传',
          },
        },
        {
          path: '/user/households',
          name: 'households',
          component: () =>
            import(
              '@/views/userManagement/householdsListView.vue'
            ),
          meta: {
            title: '住户管理',
          },
        },
        {
          path: '/user/maintenance',
          name: 'maintenance',
          component: () =>
            import(
              '@/views/userManagement/maintenanceListView.vue'
            ),
          meta: {
            title: '维修工管理',
          },
        },
        {
          path: '/admin',
          name: 'admin',
          component: () =>
            import('@/views/adminManagementView.vue'),
          meta: {
            title: '管理员管理',
            rule: '超级管理员',
          },
        },
        {
          path: '/adminInfo',
          name: 'adminInfo',
          component: () => import('@/views/adminInfo.vue'),
          meta: {
            title: '管理员信息',
          },
        },
      ],
    },
    {
      path: '/log',
      name: 'log',
      redirect: '/login',
      component: () =>
        import('@/views/login/loginIndex.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () =>
            import(
              '@/views/login/components/loginView.vue'
            ),
          meta: {
            title: '登录',
          },
        },
        {
          path: '/findBack',
          name: 'findBack',
          component: () =>
            import(
              '@/views/login/components/findBackView.vue'
            ),
          meta: {
            title: '注册',
          },
        },
      ],
    },

    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/views/error/404View.vue'),
      meta: {
        title: '页面找不到了喵~~',
      },
    },
  ],
})

router.beforeEach((to) => {
  const userInfo = useUserInfo()
  if (
    to.meta.rule === '超级管理员' &&
    userInfo.getInfo().rule != '超级管理员'
  ) {
    router.push('/404')
  }
})

router.afterEach((to) => {
  document.title = to.meta.title as string
})
export default router
