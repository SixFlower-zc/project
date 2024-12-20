<template>
  <div class="admin">
    <!-- 筛选 -->
    <div class="search">
      <a-select
        v-model="role"
        placeholder="请选择管理员权限"
        style="width: 200px"
        @change="getadmin()"
        allow-clear
      >
        <a-option>超级管理员</a-option>
        <a-option>普通管理员</a-option>
      </a-select>
      <a-button @click="add">新增</a-button>
    </div>
    <!-- 表格展示信息 -->
    <div class="table">
      <div class="table">
        <a-table
          :data="adminArr"
          bordered
          :pagination="{ pageSize: 5 }"
          page-position="bottom"
        >
          <template #columns>
            <a-table-column
              title="管理员编号"
              data-index="id"
              :align="'center'"
            >
            </a-table-column>
            <a-table-column
              title="管理员权限"
              data-index="role"
            ></a-table-column>
            <a-table-column
              title="管理员姓名"
              data-index="name"
            ></a-table-column>
            <a-table-column title="编辑" :align="'center'">
              <template #cell="{ record }">
                <div class="caozuo">
                  <a-button
                    style="width: 70px"
                    shape="round"
                    type="primary"
                    status="success"
                    @click="
                      handleClickChange(record as Admin)
                    "
                    >编辑</a-button
                  >
                </div>
              </template>
            </a-table-column>
            <a-table-column title="删除" :align="'center'">
              <template #cell="{ record }">
                <div class="caozuo">
                  <a-button
                    style="width: 70px"
                    shape="round"
                    type="primary"
                    status="danger"
                    :disabled="
                      (record as Admin).role ===
                      '超级管理员'
                    "
                    @click="
                      handleClickDelete(record as Admin)
                    "
                    >删除</a-button
                  >
                </div>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </div>
    </div>
    <!-- 添加管理员弹窗 -->
    <div class="drawer">
      <a-drawer
        :width="400"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :on-before-ok="() => check()"
        unmountOnClose
      >
        <template #title> 添加管理员 </template>
        <div>
          <a-form :model="admin">
            <!-- 图片上传占位符 -->
            <a-form-item
              field="name"
              label="名称"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员名',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员名"
                allow-clear
                :width="200"
                v-model="admin.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="username"
              label="账号"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员账号',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员账号"
                allow-clear
                v-model="admin.username"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="password"
              label="密码"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员密码',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员密码"
                allow-clear
                v-model="admin.password"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="role"
              label="权限"
              :rules="[
                {
                  required: true,
                  message: '请选择管理员权限',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择管理员权限"
                v-model="admin.role"
              >
                <a-option>超级管理员</a-option>
                <a-option>普通管理员</a-option>
              </a-select>
            </a-form-item>
          </a-form>
        </div>
      </a-drawer>
    </div>
    <!-- 管理信息修改展示 -->
    <div class="pop">
      <a-modal
        v-model:visible="popflag"
        @ok="handlePopOk"
        @cancel="popflag = false"
        @before-ok="() => check()"
        draggable
      >
        <template #title> 管理员信息修改 </template>
        <div>
          <a-form :model="admin || {}">
            <a-form-item
              field="id"
              label="ID"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员名',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员名"
                allow-clear
                :width="200"
                v-model="admin!.id"
                disabled
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="name"
              label="名称"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员名',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员名"
                allow-clear
                :width="200"
                v-model="admin!.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="username"
              label="账号"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员账号',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员账号"
                allow-clear
                v-model="admin!.username"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="password"
              label="密码"
              :rules="[
                {
                  required: true,
                  message: '请输入管理员密码',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入管理员密码"
                allow-clear
                v-model="admin!.password"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="role"
              label="权限"
              :rules="[
                {
                  required: true,
                  message: '请选择管理员权限',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择管理员权限"
                v-model="admin!.role"
              >
                <a-option>超级管理员</a-option>
                <a-option>普通管理员</a-option>
              </a-select>
            </a-form-item>
          </a-form>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  delAdmin,
  getAdminList,
  login,
  postAdmin,
  putAdmin,
} from '@/api'
import { Message } from '@arco-design/web-vue'
import { ref, type Ref } from 'vue'

const role = ref('')
const adminArr: Ref<Admin[] | undefined> = ref()

// 请求管理员数据
const getadmin = async () => {
  try {
    adminArr.value = await getAdminList({
      role: role.value,
    })
  } catch (err) {
    Message.error('列表获取失败')
    console.log(err)
  }
}
getadmin()

// 中间变量
const admin: Ref<addAdmin> = ref({
  avatar: '/src/assets/images/six_flower.jpg',
})

// 检查必填变量是否为空
const check = () => {
  switch (true) {
    case admin.value.name == '':
    case admin.value.name == undefined:
    case admin.value.username == '':
    case admin.value.username == undefined:
    case admin.value.password == '':
    case admin.value.password == undefined:
    case admin.value.role == '':
    case admin.value.role == undefined:
      Message.error('请填写完整信息')
      return false
    default:
      return true
  }
}

// 添加管理员
const visible = ref(false)

const add = () => {
  visible.value = true
  admin.value = {
    avatar: '/src/assets/images/six_flower.jpg',
  }
}

const handleOk = async () => {
  // 提交管理员数据
  admin.value = {
    ...admin.value,
    id: Date.now() + '',
    token: Date.now() + '',
  }
  const data = await login(admin.value.username as string)
  if (data.length > 0) {
    Message.error('账户已存在！')
  } else {
    try {
      await postAdmin(admin.value)
      await getadmin()
      Message.success('添加成功')
      admin.value = {
        avatar: '/src/assets/images/six_flower.jpg',
      }
      visible.value = false
    } catch (err) {
      Message.error('添加失败')
      console.error(err)
    }
  }
}

const handleCancel = () => {
  // 取消
  visible.value = false
  admin.value = {
    avatar: '/src/assets/images/six_flower.jpg',
  }
}

// 管理员信息修改
const popflag = ref(false)
// 打开编辑窗口并为数据赋值
const handleClickChange = (obj: Admin) => {
  admin.value = { ...obj }
  popflag.value = true
}

const handlePopOk = async () => {
  try {
    await putAdmin(admin.value)
    await getadmin()
    Message.success('修改成功')
    popflag.value = false
  } catch (err) {
    Message.error('修改失败')
    console.error(err)
  }
}

// 删除管理员
const handleClickDelete = async (obj: Admin) => {
  try {
    await delAdmin(obj)
    await getadmin()
    Message.success('删除成功')
  } catch (err) {
    Message.error('删除失败')
    console.error(err)
  }
}
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;

  > .search {
    display: flex;
    padding-bottom: 30px;
    justify-content: space-between;
  }

  > div {
    width: 600px;
  }
}
:deep(.arco-table-container) {
  box-sizing: border-box;
  width: 100%;
  min-height: 336px;
}
</style>
