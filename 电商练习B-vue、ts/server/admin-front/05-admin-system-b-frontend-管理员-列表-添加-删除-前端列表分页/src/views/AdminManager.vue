<template>
  <div>admin list</div>

  <el-button type="primary" @click="dialogFormVisible = true">添加管理员</el-button>

  <el-table :data="tableShowData" style="width: 100%">
    <el-table-column fixed prop="adminname" label="管理员用户名" width="150" />
    <el-table-column label="密码" width="120">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>****</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="role" label="角色" width="120" />
    <el-table-column prop="checkedKeys" label="checkedKeys" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick"> 编辑 </el-button>
        <el-button link type="primary" size="small" @click="deleteHandler(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    v-model:current-page="currentPage"
  />

  <el-dialog v-model="dialogFormVisible" title="添加管理员" width="500">
    <el-form :model="form">
      <el-form-item label="管理员用户名">
        <el-input v-model="form.adminname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input v-model="form.passord" autocomplete="off" />
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="form.role" autocomplete="off" />
      </el-form-item>
      <el-form-item label="checkedKeys">
        <el-input v-model="form.checkedKeys" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addAdminHandler()"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { getAdminListReq, adminAddReq, adminDeleteReq } from "@/api/user.js";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  created() {
    this.loadAdminList();
  },
  data() {
    return {
      //服务器返回的所有的数据
      tableData: [],
      dialogFormVisible: false,
      form: {
        adminname: "",
        password: "",
        role: "",
        checkedKeys: ""
      },
      //
      //页容量
      pageSize: 3,
      //   当前页码
      currentPage: 1
      //   数据总数
      //   total: 0
    };
  },
  computed: {
    total() {
      return this.tableData.length;
    },
    tableShowData() {
      //表格要展示的数据 ，需要从 tableData 截取--根据 currentPage
      // currentPage  pageSize
      // 1  3  -》   开始下标 0
      // 2  3  -》   开始下标 3
      // 3  3  -》   开始下标 6
      // 4  3  -》   开始下标 9

      //   let arr = this.tableData.slice(开始下标，pageSize)
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;
      let arr = this.tableData.slice(start, end);
      //   let arr = JSON.parse(JSON.stringify(this.tableData)).splice(
      //     (this.currentPage - 1) * this.pageSize,
      //     this.pageSize
      //   );
      //   let arr = this.tableData.slice(开始下标，个数)
      console.log(arr);
      console.log(this.currentPage);
      console.log(this.tableData);

      let arr2 = [];
      return arr;
    }
  },
  methods: {
    // 管理员列表
    async loadAdminList() {
      let r = await getAdminListReq();
      console.log(r.data);
      //管理数据 赋值给表格
      this.tableData = r.data.data;
    },
    //确定添加管理员
    async addAdminHandler() {
      let r = await adminAddReq(this.form);
      console.log(r.data);
      if (r.data.code == 200) {
        //隐藏弹框-弹出提示
        this.dialogFormVisible = false;
        ElMessage({
          message: r.data.message,
          type: "success"
        });
        //刷新列表
        this.loadAdminList();
      } else {
        ElMessage({
          message: r.data.message,
          type: "warning"
        });
      }
    },
    //删除函数
    async deleteHandler(row) {
      ElMessageBox.confirm("确定要删除吗", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let r = await adminDeleteReq(row.adminid);
          console.log(r.data);
          ElMessage({
            type: "success",
            message: r.data.message
          });
          this.loadAdminList();
        })
        .catch(() => {
          console.log("用户点击了取消");

          //   ElMessage({
          //     type: "info",
          //     message: "Delete canceled"
          //   });
        });
    },
    handleClick() {}
  }
};
</script>
<style lang=""></style>
