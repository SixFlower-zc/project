<template>
  <a-layout class="layout-demo">
    <a-layout-sider collapsible breakpoint="xl">
      <div class="logo">Logo 先 欠 着</div>
      <a-menu
        :default-open-keys="['workOrder', 'user']"
        :default-selected-keys="menuSelect.getmenu()"
        :style="{ width: '100%' }"
        @menu-item-click="onClickMenuItem"
      >
        <a-menu-item key="home">
          <IconCalendar></IconCalendar>
          首页
        </a-menu-item>
        <a-sub-menu key="workOrder">
          <template #title>
            <IconCalendar></IconCalendar> 工单管理
          </template>
          <a-menu-item key="workOrder/list"
            >工单列表</a-menu-item
          >
          <a-menu-item key="workOrder/Approval"
            >工单审批</a-menu-item
          >
          <a-menu-item key="workOrder/up"
            >工单上传</a-menu-item
          >
        </a-sub-menu>
        <a-sub-menu key="user">
          <template #title>
            <IconCalendar></IconCalendar> 人员管理
          </template>
          <a-menu-item key="user/households"
            >住户管理</a-menu-item
          >
          <a-menu-item key="user/maintenance"
            >维修工管理</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item
          key="admin"
          v-if="userInfo.getInfo().rule === '超级管理员'"
        >
          <IconCalendar></IconCalendar>
          管理员管理
        </a-menu-item>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px">
        六六六花花的小区维修管理系统
        <div class="avatar">
          <span>{{ info?.name }}</span>
          <a-avatar
            trigger-type="mask"
            @click="onClickMenuItem('adminInfo')"
          >
            <img alt="avatar" :src="info?.avatar" />
            <template #trigger-icon>
              <IconEdit />
            </template>
          </a-avatar>
        </div>
      </a-layout-header>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item
            v-for="item in pathName.split('/')"
            :key="item"
            >{{ item }}</a-breadcrumb-item
          >
        </a-breadcrumb>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer
          >本管理系统由六六六花花自主开发</a-layout-footer
        >
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {
  IconCaretRight,
  IconCaretLeft,
  IconCalendar,
} from '@arco-design/web-vue/es/icon'
import { computed, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserInfo } from '@/stores/userInfo'
import { usemenuSelect } from '@/stores'
import { getAdmin } from '@/api'

const menuSelect = usemenuSelect()
const userInfo = useUserInfo()
const info: Ref<Admin | undefined> = ref()
const path_str = ref(menuSelect.getmenu()[0])
const router = useRouter()

getAdmin(userInfo.getInfo().id)
  .then((res) => {
    info.value = res
  })
  .catch((err) => {
    console.error(err)
  })

const pathName = computed(() =>
  path_str.value
    .replace('home', '首页')
    .replace('workOrder', '工单管理')
    .replace('Approval', '工单审批')
    .replace('list', '工单列表')
    .replace('up', '工单上传')
    .replace('user', '人员管理')
    .replace('households', '住户管理')
    .replace('maintenance', '维修工管理')
    .replace('adminInfo', '管理员信息')
    .replace('admin', '管理员管理')
)

const onClickMenuItem = (key: string) => {
  menuSelect.setmenu(key)
  path_str.value = key
  router.push('/' + key)
}

// 自动切换到上次登录的页面
router.replace('/' + menuSelect.getmenu())

if (userInfo.getInfo().token === '') {
  router.replace('/log')
}
</script>

<style scoped lang="scss">
.layout-demo {
  height: 100%;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(var(--red-2));
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
.avatar {
  float: right;
  padding: 0 28px;
  span {
    margin-right: 15px;
  }
}
</style>
