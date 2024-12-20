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
      <div>
        <span>工单状态：</span>
        <a-auto-complete
          :data="searchArr.workOrderStatus"
          @change="handleSearch('workOrderStatus', $event)"
          :style="{
            width: '150px',
            border: '1px solid #000',
          }"
          placeholder="请输入工单状态"
          allow-clear
        />
      </div>
    </div>
    <!-- 表格展示 -->
    <div class="table">
      <a-table
        :data="data"
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
          <a-table-column
            title="日志查看与更改"
            :align="'center'"
          >
            <template #cell="{ record }">
              <div class="caozuo">
                <a-button
                  shape="round"
                  type="primary"
                  status="success"
                  @click="handleClick(record.log as Log[])"
                  ><icon-eye
                /></a-button>
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
                      .workOrderStatus === '订单取消' ||
                    (record as WorkOrder)
                      .workOrderStatus === '上传费用'
                  "
                  >{{
                    computedState(
                      (record as WorkOrder).workOrderStatus
                    )
                  }}</a-button
                >
              </div>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
    <!-- 日志查看弹窗 -->
    <div class="pop-up">
      <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        draggable
      >
        <template #title> 维修日志 </template>
        <div>
          <a-table :data="logData" bordered>
            <template #columns>
              <a-table-column title="序号" data-index="id">
              </a-table-column>
              <a-table-column
                title="处理日期"
                data-index="Date"
              >
              </a-table-column>
              <a-table-column
                title="工单状态"
                data-index="state"
              >
              </a-table-column>
              <a-table-column
                title="处理人"
                data-index="person"
              >
              </a-table-column>
            </template>
          </a-table>
        </div>
      </a-modal>
    </div>
    <!-- 状态修改弹窗 -->
    <div>
      <a-modal
        v-model:visible="stateVisible"
        @ok="handleStateVisibleOk"
        draggable
        @before-ok="beforeOk"
      >
        <a-list>
          <a-list-item
            ><span>订单ID</span
            ><span>{{
              stateData.obj.id
            }}</span></a-list-item
          >
          <a-list-item
            ><span>报修住户</span
            ><span>{{
              stateData.obj.contact
            }}</span></a-list-item
          >
          <a-list-item
            ><span>联系方式</span
            ><span>{{
              stateData.obj.phone
            }}</span></a-list-item
          >
          <a-list-item
            ><span>维修工</span
            ><span v-if="stateData.str != '派单'">{{
              stateData.obj.maintenanceMan
            }}</span>

            <span v-else>
              <a-select
                v-model="stateData.obj.maintenanceMan"
                placeholder="请选择维修工"
                allow-create
              >
                <a-option
                  v-for="item in MaintenanceManData"
                  :key="item.id"
                  >{{ item.name }}</a-option
                >
              </a-select>
            </span>
          </a-list-item>

          <a-list-item
            ><span>材料费用</span
            ><span v-if="stateData.str != '上传费用'">{{
              stateData.obj.price
            }}</span>
            <span v-else>
              <a-input
                placeholder="请输入材料费用"
                allow-clear
                v-model="stateData.obj.price"
              >
              </a-input>
            </span>
          </a-list-item>
        </a-list>
        <template #title> {{ stateTitle }} </template>
        <div></div>
      </a-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getMaintenance,
  getWorkOrder,
  stateChange,
} from '@/api'
import { computed, ref, type Ref } from 'vue'
import { MulLineOmission } from '@/components'
import { Message } from '@arco-design/web-vue'

// 获取列表数据
const data: Ref<WorkOrder[] | undefined> = ref()
const paramsStrObj: Ref<getWorkOrderParams> = ref({})

// 获取工单列表
const getList = async () => {
  try {
    data.value = await getWorkOrder(paramsStrObj.value)
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getList()

// 获取维修工列表
const MaintenanceManData: Ref<MaintenanceMan[] | null> =
  ref(null)
const getMaintenanceList = async () => {
  MaintenanceManData.value = await getMaintenance()
}
getMaintenanceList()

// 修改订单状态
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
  } else if (state === '订单取消') {
    return '订单取消'
  } else if (state === '派单') {
    // 不需要填信息的状态修改
    return stateArr[stateArr.indexOf(state) + 1] as LogState
  }
  return state
}

// 搜索框
// 计算，关键词搜索
const searchArr = computed(() => {
  if (data.value) {
    const id = data.value!.map((v) => v.id)
    const Date = Array.from(
      new Set(data.value!.map((v) => v.Date))
    )
    const contact = Array.from(
      new Set(data.value!.map((v) => v.contact))
    )
    const workOrderStatus = Array.from(
      new Set(data.value!.map((v) => v.workOrderStatus))
    )
    const maintenanceMan = Array.from(
      new Set(data.value!.map((v) => v.maintenanceMan))
    )
    return {
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

// 根据搜索参数获取列表
const handleSearch = (type: string, value: string) => {
  paramsStrObj.value = {
    ...paramsStrObj.value,
    [type]: value,
  }
  getList()
}

// 查看日志弹窗
const visible = ref(false)
const logData: Ref<Log[] | undefined> = ref()
const handleClick = (obj: Log[]) => {
  logData.value = obj
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}

// 工单状态改变
const stateVisible = ref(false)
const stateTitle = ref('创建工单')
const stateData: Ref<{ obj: WorkOrder; str: LogState }> =
  ref({ obj: {} as WorkOrder, str: '创建工单' })

const handleClickChange = async (
  obj: WorkOrder,
  str: LogState
) => {
  stateTitle.value = str
  // 不需要填写信息的状态修改
  if (
    ['审核完成', '已完成', '施工中', '待支付'].includes(str)
  ) {
    try {
      await stateChange(obj, str)
      Message.success('订单' + obj.id + str)
      getList()
    } catch (err) {
      console.error(err)
      Message.error('修改状态失败')
    }
  } else {
    stateVisible.value = true
    stateData.value = { obj, str }
  }
}

const beforeOk = () => {
  if (
    stateData.value.obj.price === '' ||
    stateData.value.obj.maintenanceMan === ''
  ) {
    Message.error('请把数据填写完整')
    return false
  }
  return true
}

const handleStateVisibleOk = async () => {
  // 派单
  // 上传费用
  try {
    await stateChange(
      {
        ...stateData.value.obj,
        price: Number(stateData.value.obj.price) + '',
      },
      stateData.value.str
    )
    Message.success(
      '订单' + stateData.value.obj.id + stateData.value.str
    )
    getList()
  } catch (err) {
    console.error(err)
    Message.error('修改状态失败')
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
:deep(.arco-list-item-content) {
  display: flex;

  > span {
    text-align: center;
  }

  > :first-child {
    flex: 1;
  }

  > :nth-child(2) {
    flex: 3;
  }
}
</style>
