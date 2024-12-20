<template>
  <div class="box">
    <!-- 筛选 -->
    <div class="search">
      <a-select
        v-model="maintenanceManParams.id"
        placeholder="请选择维修工编号"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in maintenanceManListComputed.id"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-select
        v-model="maintenanceManParams.name"
        placeholder="请选择维修工姓名"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in maintenanceManListComputed.name"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-select
        v-model="maintenanceManParams.speciality"
        placeholder="请选择维修工专长"
        allow-create
        style="width: 200px"
        @change="getList()"
        allow-clear
      >
        <a-option
          v-for="item in maintenanceManListComputed.speciality"
          :key="item"
          >{{ item }}</a-option
        >
      </a-select>
      <a-button @click="add">新增</a-button>
    </div>
    <!-- 表格展示信息 -->
    <div class="table">
      <div class="table">
        <a-table
          :data="maintenanceManList"
          bordered
          :pagination="{ pageSize: 5 }"
          page-position="bottom"
        >
          <template #columns>
            <a-table-column
              title="编号"
              data-index="id"
              :align="'center'"
              :width="130"
            >
            </a-table-column>
            <a-table-column
              title="姓名"
              data-index="name"
              :width="100"
            ></a-table-column>
            <a-table-column
              title="联系方式"
              data-index="phone"
              :width="130"
            ></a-table-column>
            <a-table-column
              title="经验"
              data-index="workExperience"
              :width="80"
            ></a-table-column>
            <a-table-column title="备注" :width="130">
              <template #cell="{ record }">
                <MulLineOmission
                  width="100"
                  :title="
                    (record as MaintenanceMan).remarks
                  "
                  >{{
                    (record as MaintenanceMan).remarks
                  }}</MulLineOmission
                >
              </template>
            </a-table-column>
            <a-table-column
              title="专长"
              data-index="speciality"
              :width="150"
            ></a-table-column>
            <a-table-column title="技能" :align="'center'">
              <template #cell="{ record }">
                <div class="caozuo">
                  <a-button
                    shape="round"
                    type="primary"
                    status="success"
                    @click="
                      skillsPop(
                        record as MaintenanceMan,
                        'skills'
                      )
                    "
                    ><icon-eye
                  /></a-button>
                </div>
              </template>
            </a-table-column>
            <a-table-column
              title="历史工单"
              :align="'center'"
            >
              <template #cell="{ record }">
                <div class="caozuo">
                  <a-button
                    shape="round"
                    type="primary"
                    status="success"
                    @click="
                      skillsPop(
                        record as MaintenanceMan,
                        'TotalOrders'
                      )
                    "
                    ><icon-eye
                  /></a-button>
                </div>
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
                      handleClickChange(
                        record as MaintenanceMan
                      )
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
                      handleClickDelete(
                        record as MaintenanceMan
                      )
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
    <!-- 添加维修工弹窗 -->
    <div class="drawer">
      <a-drawer
        :width="500"
        :visible="visible"
        @ok="handleOk"
        @cancel="
          () => {
            maintenanceMan = {}
            visible = false
          }
        "
        :on-before-ok="() => check()"
        unmountOnClose
      >
        <template #title> 添加维修工 </template>
        <div>
          <a-form :model="maintenanceMan">
            <a-form-item
              field="name"
              label="姓名"
              :rules="[
                {
                  required: true,
                  message: '请输入维修工姓名',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入维修工姓名"
                allow-clear
                :width="200"
                v-model="maintenanceMan.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="level"
              label="水平描述"
              :rules="[
                {
                  required: true,
                  message: '请输入水平描述',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入水平描述"
                allow-clear
                :width="200"
                v-model="maintenanceMan.level"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="workExperience"
              label="工作经验"
              :rules="[
                {
                  required: true,
                  message: '请输入工作经验',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入工作经验"
                allow-clear
                v-model="maintenanceMan.workExperience"
              ></a-input>
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
                v-model="maintenanceMan.phone"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="speciality"
              label="专长"
              :rules="[
                { required: true, message: '请选择专长' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择专长"
                v-model="maintenanceMan.speciality"
                @change="maintenanceMan.skills = []"
              >
                <a-option
                  v-for="(
                    item, index
                  ) in skillsComputed.speciality"
                  :key="index"
                  >{{ item }}</a-option
                >
              </a-select>
            </a-form-item>
            <a-form-item
              field="skills"
              label="技能"
              :rules="[
                { required: true, message: '请选择技能' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择技能"
                v-model="maintenanceMan.skills"
                multiple
              >
                <a-option
                  v-for="(
                    item, index
                  ) in skillsComputed.skill"
                  :key="index"
                  >{{ item }}</a-option
                >
              </a-select>
            </a-form-item>
            <a-form-item
              field="certificate"
              label="证书"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请写入证书"
                v-model="maintenanceMan.certificate"
                allow-create
                multiple
              >
              </a-select>
            </a-form-item>
            <a-form-item
              field="remarks"
              label="备注"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="maintenanceMan.remarks"
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
    <!-- 维修工信息修改展示 -->
    <div class="pop">
      <a-modal
        v-model:visible="editflag"
        @ok="handleEditflagOk"
        @cancel="editflag = false"
        :on-before-ok="() => check()"
        draggable
      >
        <template #title> 维修工信息修改 </template>
        <div>
          <a-form :model="maintenanceMan">
            <a-form-item
              field="name"
              label="姓名"
              :rules="[
                {
                  required: true,
                  message: '请输入维修工姓名',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入维修工姓名"
                allow-clear
                :width="200"
                v-model="maintenanceMan.name"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="level"
              label="水平描述"
              :rules="[
                {
                  required: true,
                  message: '请输入水平描述',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入水平描述"
                allow-clear
                :width="200"
                v-model="maintenanceMan.level"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="workExperience"
              label="工作经验"
              :rules="[
                {
                  required: true,
                  message: '请输入工作经验',
                },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                placeholder="请输入工作经验"
                allow-clear
                v-model="maintenanceMan.workExperience"
              ></a-input>
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
                v-model="maintenanceMan.phone"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              field="speciality"
              label="专长"
              :rules="[
                { required: true, message: '请选择专长' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择专长"
                v-model="maintenanceMan.speciality"
                @change="maintenanceMan.skills = []"
              >
                <a-option
                  v-for="(
                    item, index
                  ) in skillsComputed.speciality"
                  :key="index"
                  >{{ item }}</a-option
                >
              </a-select>
            </a-form-item>
            <a-form-item
              field="skills"
              label="技能"
              :rules="[
                { required: true, message: '请选择技能' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请选择技能"
                v-model="maintenanceMan.skills"
                multiple
              >
                <a-option
                  v-for="(
                    item, index
                  ) in skillsComputed.skill"
                  :key="index"
                  >{{ item }}</a-option
                >
              </a-select>
            </a-form-item>
            <a-form-item
              field="certificate"
              label="证书"
              :validate-trigger="['change', 'input']"
            >
              <a-select
                placeholder="请写入证书"
                v-model="maintenanceMan.certificate"
                allow-create
                multiple
              >
              </a-select>
            </a-form-item>
            <a-form-item
              field="remarks"
              label="备注"
              :validate-trigger="['change', 'input']"
            >
              <a-textarea
                v-model="maintenanceMan.remarks"
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
    <!-- 信息查看弹窗 -->
    <div class="pop-up">
      <a-modal v-model:visible="popflag" draggable>
        <template #title>
          {{
            popType === 'TotalOrders'
              ? '历史工单'
              : '技能列表'
          }}
        </template>
        <div>
          <a-list>
            <a-list-item
              v-for="(item, index) in maintenanceMan[
                popType
              ]"
              :key="index"
              >{{ item }}</a-list-item
            >
          </a-list>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  delmaintenanceMan,
  getMaintenance,
  getSkills,
  postmaintenanceMan,
  putmaintenanceMan,
} from '@/api'
import { Message } from '@arco-design/web-vue'
import { computed, ref, type Ref } from 'vue'
import { MulLineOmission } from '@/components'
import dayToStr from '@/utils/dayToStr'
import RandomString from '@/utils/RandomString'

// 筛选用户时的搜索参数
const maintenanceManParams: Ref<MaintenanceManParams> = ref(
  {}
)

// 获取维修工列表
const maintenanceManList: Ref<
  MaintenanceMan[] | undefined
> = ref()
const getList = async () => {
  try {
    maintenanceManList.value = await getMaintenance(
      maintenanceManParams.value
    )
  } catch (err) {
    console.error(err)
    Message.error('获取列表失败')
  }
}
getList()

// 获取技能列表
const skills: Ref<Skill[]> = ref([])
const skillslist = async () => {
  skills.value = await getSkills()
}
skillslist()

// 技能列表计算属性
const skillsComputed = computed(() => {
  const speciality = skills.value.map((v) => v.speciality)
  let skill = ['']
  let watch = ''
  if (
    skills.value.length > 0 &&
    maintenanceMan.value.speciality
  ) {
    watch = maintenanceMan.value.speciality
    skill = skills.value.filter(
      (v) =>
        v.speciality === maintenanceMan.value.speciality
    )[0].skills
  }
  return { speciality, skill, watch }
})

// 中间变量
const maintenanceMan: Ref<addMaintenanceMan> = ref({})

// 检查必填变量是否为空
const check = () => {
  switch (true) {
    case maintenanceMan.value.name === '':
    case maintenanceMan.value.name === undefined:
    case maintenanceMan.value.level === '':
    case maintenanceMan.value.level === undefined:
    case maintenanceMan.value.workExperience == '':
    case maintenanceMan.value.workExperience == undefined:
    case maintenanceMan.value.speciality === undefined:
    case maintenanceMan.value.skills?.length === 0:
      Message.error('必填项不能为空')
      return false
    default:
      return true
  }
}

const maintenanceManListComputed = computed(() => {
  const id = maintenanceManList.value?.map((v) => v.id)
  const name = Array.from(
    new Set(maintenanceManList.value?.map((v) => v.name))
  )
  const speciality = Array.from(
    new Set(
      maintenanceManList.value?.map((v) => v.speciality)
    )
  )
  return { id, name, speciality }
})

// 维修工信息更改
const editflag = ref(false)
const handleClickChange = (obj: MaintenanceMan) => {
  editflag.value = true
  maintenanceMan.value = { ...obj }
}

const handleEditflagOk = async () => {
  try {
    await putmaintenanceMan(maintenanceMan.value)
    Message.success('修改成功')
    editflag.value = false
    getList()
  } catch (err) {
    console.error(err)
    Message.error('修改失败')
  }
}

// 维修工删除
const handleClickDelete = async (obj: MaintenanceMan) => {
  try {
    await delmaintenanceMan(obj.id)
    Message.success('删除成功')
    getList()
  } catch (err) {
    console.error(err)
    Message.error('删除失败')
  }
}

// 查看维修工技能
const popflag = ref(false)
const popType: Ref<'TotalOrders' | 'skills'> = ref('skills')
const skillsPop = (
  obj: MaintenanceMan,
  type: 'TotalOrders' | 'skills'
) => {
  popflag.value = true
  popType.value = type
  maintenanceMan.value = {
    ...obj,
  }
}

// 新增维修工
const visible = ref(false)
const add = () => {
  visible.value = true
  maintenanceMan.value = {}
}

const handleOk = () => {
  maintenanceMan.value = {
    ...maintenanceMan.value,
    id: 'RP' + dayToStr('YYYYMM') + RandomString(3),
    TotalOrders: [],
    currentState: '在职',
  }
  post()
}

const post = async () => {
  try {
    await postmaintenanceMan(maintenanceMan.value)
    visible.value = false
    maintenanceMan.value = {}
    getList()
    Message.success('新增成功')
  } catch (err) {
    console.error(err)
    Message.error('新增失败')
  }
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
