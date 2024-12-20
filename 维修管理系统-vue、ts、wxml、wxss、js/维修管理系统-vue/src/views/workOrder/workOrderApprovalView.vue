<template>
  <div class="orderListBox">
    <!-- 筛选 -->
    <div class="search">
      <div>
        <span>工单编号：</span>
        <a-auto-complete
          :data="searchArr.id"
          @change="handleSearch('id', $event)"
          :style="{
            width: '150px',
            border: '1px solid #000',
          }"
          placeholder="请输入工单编号"
          allow-clear
        />
      </div>
      <div>
        <span>日期：</span>
        <a-auto-complete
          :data="searchArr.Date"
          @change="handleSearch('Date', $event)"
          :style="{
            width: '150px',
            border: '1px solid #000',
          }"
          placeholder="请输入维修日期"
          allow-clear
        />
      </div>
      <div>
        <span>联系人：</span>
        <a-auto-complete
          :data="searchArr.contact"
          @change="handleSearch('contact', $event)"
          :style="{
            width: '150px',
            border: '1px solid #000',
          }"
          placeholder="请输入联系人"
          allow-clear
        />
      </div>
      <div>
        <span>维修人员：</span>
        <a-auto-complete
          :data="searchArr.maintenanceMan"
          @change="handleSearch('maintenanceMan', $event)"
          :style="{
            width: '150px',
            border: '1px solid #000',
          }"
          placeholder="请输入维修人员"
          allow-clear
        />
      </div>
    </div>
    <!-- 表格展示信息 -->
    <div class="table">
      <a-table
        :data="searchArr.data"
        bordered
        :pagination="{ pageSize: 5 }"
        page-position="bottom"
      >
        <template #columns>
          <a-table-column
            title="工单编号"
            data-index="id"
            :width="135"
          >
          </a-table-column>
          <a-table-column
            title="日期"
            data-index="Date"
            :width="110"
          ></a-table-column>
          <a-table-column title="故障位置" :width="132">
            <template #cell="{ record }">
              <MulLineOmission
                width="100"
                :title="(record as WorkOrder).faultLocation"
                >{{
                  (record as WorkOrder).faultLocation
                }}</MulLineOmission
              >
            </template>
          </a-table-column>
          <a-table-column
            title="联系人"
            data-index="contact"
            :width="100"
          ></a-table-column>
          <a-table-column
            title="联系电话"
            data-index="phone"
            :width="125"
          ></a-table-column>
          <a-table-column title="故障照片" :width="89">
            <template #cell="{ record }">
              <a-image
                width="40"
                :src="(record as WorkOrder).image"
              />
            </template>
          </a-table-column>
          <a-table-column
            title="维修人员"
            data-index="maintenanceMan"
            :width="100"
          ></a-table-column>
          <a-table-column
            title="工单状态"
            data-index="workOrderStatus"
            :width="89"
          ></a-table-column>
          <a-table-column title="备注" :width="102">
            <template #cell="{ record }">
              <MulLineOmission
                width="70"
                :title="(record as WorkOrder).remarks"
                >{{
                  (record as WorkOrder).remarks
                }}</MulLineOmission
              >
            </template>
          </a-table-column>
          <a-table-column title="审批" :align="'center'">
            <template #cell="{ record }">
              <div class="caozuo">
                <a-button
                  style="width: 70px"
                  shape="round"
                  type="primary"
                  status="success"
                  @click="
                    handleClickChange(
                      record as WorkOrder,
                      computedState(
                        (record as WorkOrder)
                          .workOrderStatus
                      )
                    )
                  "
                  :disabled="
                    (record as WorkOrder).log.length ===
                      7 ||
                    (record as WorkOrder)
                      .workOrderStatus === '订单取消'
                  "
                  >{{
                    computedState(
                      (record as WorkOrder).workOrderStatus
                    )
                  }}</a-button
                >
                <a-button
                  style="width: 70px"
                  shape="round"
                  type="primary"
                  status="warning"
                  @click="
                    handleClickCancel(record as WorkOrder)
                  "
                  :disabled="
                    (record as WorkOrder)
                      .workOrderStatus === '订单取消'
                  "
                  >取消订单</a-button
                >
              </div>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWorkOrder, stateChange } from '@/api'
import { computed, ref, type Ref } from 'vue'
import { MulLineOmission } from '@/components'
import { Message } from '@arco-design/web-vue'

// 获取列表数据
const data: Ref<WorkOrder[] | null> = ref(null)
const paramsStrObj = ref({
  id: '',
  Date: '',
  contact: '',
  maintenanceMan: '',
  workOrderStatus: '',
})

// 获取列表数据
const getList = async () => {
  try {
    data.value = await getWorkOrder(paramsStrObj.value)
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getList()

// 计算，指定订单状态
const stateArr = [
  '创建工单',
  '派单',
  '上传费用',
  '审核完成',
  '待支付',
  '施工中',
  '已完成',
]
const computedState = (state: LogState) => {
  if (state === '已完成') {
    return state
  } else {
    return stateArr[stateArr.indexOf(state) + 1] as LogState
  }
}

// 搜索框
// 计算，关键词搜索
const searchArr = computed(() => {
  if (data.value) {
    const arr = data.value.filter(
      (v) => v.workOrderStatus === '上传费用'
    ) as WorkOrder[]
    const id = Array.from(new Set(arr.map((v) => v.id)))
    const Date = Array.from(new Set(arr.map((v) => v.Date)))
    const contact = Array.from(
      new Set(arr.map((v) => v.contact))
    )
    const workOrderStatus = Array.from(
      new Set(arr.map((v) => v.workOrderStatus))
    )
    const maintenanceMan = Array.from(
      new Set(arr.map((v) => v.maintenanceMan))
    )
    return {
      data: arr,
      id,
      Date,
      contact,
      workOrderStatus,
      maintenanceMan,
    }
  } else {
    return {}
  }
})

const handleSearch = (type: string, value: string) => {
  paramsStrObj.value = {
    ...paramsStrObj.value,
    [type]: value,
  }
  getList()
}

// 工单状态改变
const handleClickChange = async (
  obj: WorkOrder,
  str: LogState
) => {
  try {
    await stateChange(obj, str)
    getList()
  } catch (err) {
    console.error(err)
    Message.error('状态改变失败')
  }
}

// 取消订单
const handleClickCancel = async (obj: WorkOrder) => {
  try {
    await stateChange(obj, '订单取消')
    getList()
  } catch (err) {
    console.error(err)
    Message.error('取消失败')
  }
}
</script>

<style scoped lang="scss">
.orderListBox {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  .caozuo {
    display: flex;
    justify-content: space-evenly;
  }
  .search {
    display: flex;
    padding: 30px 15px;
    width: 100%;
    justify-content: space-around;
    > div {
      > span {
        color: #000;
      }
    }
  }
}
:deep(.arco-table-container) {
  box-sizing: border-box;
  width: 100%;
  min-height: 336px;
}
</style>
