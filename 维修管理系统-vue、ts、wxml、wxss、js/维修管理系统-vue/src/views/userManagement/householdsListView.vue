<template>
  <div class="box">
    <!-- 筛选 -->
    <div class="search">
      <a-select
        v-model="householdParams.id"
        placeholder="请选择住户编号"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in householdComputed.id"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-select
        v-model="householdParams.name"
        placeholder="请选择住户名"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in householdComputed.name"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-select
        v-model="householdParams.age"
        placeholder="请选择住户年龄"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in householdComputed.age"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-select
        v-model="householdParams.gender"
        placeholder="请选择住户性别"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option>男</a-option>
        <a-option>女</a-option>
      </a-select>
      <a-button @click="add">新增</a-button>
    </div>
    <!-- 表格展示信息 -->
    <div class="table">
      <div class="table">
        <a-table
          :data="householdList"
          bordered
          :pagination="{ pageSize: 5 }"
          page-position="bottom"
          :width="130"
        >
          <template #columns>
            <a-table-column
              title="编号"
              data-index="id"
              :align="'center'"
              :width="120"
            >
            </a-table-column>
            <a-table-column
              title="姓名"
              data-index="name"
              :width="100"
            ></a-table-column>
            <a-table-column
              title="性别"
              data-index="gender"
              :width="60"
            ></a-table-column>
            <a-table-column
              title="年龄"
              data-index="age"
              :width="60"
            ></a-table-column>
            <a-table-column
              title="联系电话"
              data-index="phone"
              :width="125"
            ></a-table-column>
            <a-table-column title="地址" :width="150">
              <template #cell="{ record }">
                <MulLineOmission
                  width="130"
                  :title="(record as household).address"
                  >{{
                    (record as household).address
                  }}</MulLineOmission
                >
              </template>
            </a-table-column>
            <a-table-column title="备注" :width="150">
              <template #cell="{ record }">
                <MulLineOmission
                  width="130"
                  :title="(record as household).remarks"
                  >{{
                    (record as household).remarks
                  }}</MulLineOmission
                >
              </template>
            </a-table-column>
            <a-table-column title="编辑" :align="'center'">
              <template #cell="{ record }">
                <div class="caozuo">
                  <a-button
                    style="width: 70px"
                    shape="round"
                    type="primary"
                    status="success"
                    @click="
                      handleClickChange(record as household)
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
                    @click="
                      handleClickDelete(record as household)
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
    <!-- 添加住户弹窗 -->
    <div class="drawer">
      <a-drawer
        :width="500"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :on-before-ok="() => check()"
        unmountOnClose
      >
        <template #title> 添加住户 </template>
        <div>
          <a-form :model="household">
            <a-form-item
              field="name"
              label="住户名"
              :rules="[
                { required: true, message: '请输入住户名' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入住户名"
                allow-clear
                :width="200"
                v-model="household.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="age"
              label="年龄"
              :rules="[
                { required: true, message: '请输入年龄' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入年龄"
                allow-clear
                :width="200"
                v-model="household.age"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="gender"
              label="性别"
              :rules="[
                { required: true, message: '请选择性别' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择性别"
                v-model="household.gender"
              >
                <a-option>男</a-option>
                <a-option>女</a-option>
              </a-select>
            </a-form-item>
            <a-form-item
              field="phone"
              label="联系电话"
              :rules="[
                {
                  required: true,
                  message: '请输入联系电话',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入联系电话"
                allow-clear
                v-model="household.phone"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="address"
              label="地址"
              :rules="[
                { required: true, message: '请输入地址' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="household.address"
                placeholder="请输入地址"
                allow-clear
                :auto-size="{
                  minRows: 2,
                  maxRows: 2,
                }"
              />
            </a-form-item>
            <a-form-item
              field="remarks"
              label="备注"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="household.remarks"
                placeholder="请输入备注"
                allow-clear
                :auto-size="{
                  minRows: 2,
                  maxRows: 2,
                }"
              />
            </a-form-item>
          </a-form>
        </div>
      </a-drawer>
    </div>
    <!-- 住户信息修改展示 -->
    <div class="pop">
      <a-modal
        v-model:visible="popflag"
        @ok="handlePopOk"
        @cancel="popflag = false"
        @before-ok="check"
        draggable
      >
        <template #title> 住户信息修改 </template>
        <div>
          <a-form :model="household">
            <a-form-item
              field="name"
              label="住户名"
              :rules="[
                { required: true, message: '请输入住户名' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入住户名"
                allow-clear
                :width="200"
                v-model="household.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="age"
              label="年龄"
              :rules="[
                { required: true, message: '请输入年龄' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入年龄"
                allow-clear
                :width="200"
                v-model="household.age"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="gender"
              label="性别"
              :rules="[
                { required: true, message: '请选择性别' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择性别"
                v-model="household.gender"
              >
                <a-option>男</a-option>
                <a-option>女</a-option>
              </a-select>
            </a-form-item>
            <a-form-item
              field="phone"
              label="联系电话"
              :rules="[
                {
                  required: true,
                  message: '请输入联系电话',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入联系电话"
                allow-clear
                v-model="household.phone"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="address"
              label="地址"
              :rules="[
                { required: true, message: '请输入地址' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="household.address"
                placeholder="请输入地址"
                allow-clear
                :auto-size="{
                  minRows: 2,
                  maxRows: 2,
                }"
              />
            </a-form-item>
            <a-form-item
              field="remarks"
              label="备注"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="household.remarks"
                placeholder="请输入备注"
                allow-clear
                :auto-size="{
                  minRows: 2,
                  maxRows: 2,
                }"
              />
            </a-form-item>
          </a-form>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  delHouseholds,
  getHouseholds,
  postHouseholds,
  putHouseholds,
} from '@/api'
import dayToStr from '@/utils/dayToStr'
import RandomString from '@/utils/RandomString'
import { Message } from '@arco-design/web-vue'
import { computed, ref, type Ref } from 'vue'
import { MulLineOmission } from '@/components'

// 筛选用户时的搜索参数
const householdParams: Ref<getHouseholdsParams> = ref({})

// 获取住户列表
const householdList: Ref<household[] | undefined> = ref()
const getList = async () => {
  try {
    householdList.value = await getHouseholds(
      householdParams.value
    )
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getList()

// 中间变量
const household: Ref<addhousehold> = ref({})

const check = () => {
  switch (true) {
    case household.value.address === undefined:
    case household.value.address === '':
    case household.value.age === undefined:
    case household.value.age === '':
    case household.value.name === undefined:
    case household.value.name === '':
    case household.value.phone === undefined:
    case household.value.phone === '':
      Message.error('必填信息不能为空')
      return false
    default:
      return true
  }
}

// 计算住户筛选信息
const householdComputed = computed(() => {
  const id = householdList.value?.map((v) => v.id)
  const name = Array.from(
    new Set(householdList.value?.map((v) => v.name))
  )
  const age = Array.from(
    new Set(householdList.value?.map((v) => v.age))
  )
  return { name, id, age }
})

// 编辑住户信息
const popflag = ref(false)
const handleClickChange = (obj: household) => {
  popflag.value = true
  const obj_ = {
    ...obj,
    age: obj.age + '',
  }
  household.value = {
    ...obj_,
  }
}

const handlePopOk = async () => {
  try {
    await putHouseholds(household.value)
    Message.success('修改成功')
    getList()
  } catch (err) {
    console.error(err)
    Message.error('修改失败')
  }
}

// 删除住户信息
const handleClickDelete = (obj: household) => {
  delHouseholds(obj.id)
    .then(() => {
      Message.success('删除成功')
      getList()
    })
    .catch(() => {
      Message.error('删除失败')
    })
}

// 添加住户弹窗
const visible = ref(false)
const add = () => {
  visible.value = true
  household.value = {}
}

const handleOk = () => {
  visible.value = false
  household.value = {
    ...household.value,
    id: 'H' + dayToStr('YYYYMM') + RandomString(3),
    date: dayToStr('YYYY-MM-DD'),
    age: household.value.age,
  }
  post()
}

const post = async () => {
  try {
    await postHouseholds(household.value)
    getList()
    household.value = {}
    Message.success('添加成功')
  } catch (err) {
    console.error(err)
    Message.error('添加失败')
  }
}

const handleCancel = () => {
  visible.value = false
  household.value = {}
}
</script>

<style lang="scss" scoped>
.box {
  padding: 30px;

  .search {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
  }
}
:deep(.arco-table-container) {
  box-sizing: border-box;
  width: 100%;
  min-height: 336px;
}
</style>
