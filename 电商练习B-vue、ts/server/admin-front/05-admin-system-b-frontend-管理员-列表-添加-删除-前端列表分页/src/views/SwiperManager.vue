<template>
  <h1>轮播管理</h1>
  <el-button @click="handleAdd()"> 添加轮播图 </el-button>

  <el-carousel :interval="2000" type="card" height="200px" :autoplay="false" ref="lunbo">
    <el-carousel-item v-for="item in tableData" :key="item">
      <img :src="item.img" alt="" />
    </el-carousel-item>
  </el-carousel>

  <el-table :data="tableData" style="width: 100%" :header-cell-style="{ textAlign: 'center' }">
    <el-table-column label="图片地址" align="center" width="380">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center">
          <span style="margin-left: 10px">{{ scope.row.img }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="图片" align="center" width="380">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center">
          <img :src="scope.row.img" style="width: 200px" />
        </div>
      </template>
    </el-table-column>
    <el-table-column label="跳转链接" align="center" width="280">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center">
          <span style="margin-left: 10px">{{ scope.row.link }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="alt属性" align="center" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center">
          <span style="margin-left: 10px">{{ scope.row.alt }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="操作" align="center" width="180">
      <template #default="scope">
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" title="添加轮播图" width="500">
    <el-form :model="form">
      <el-form-item label="图片跳转链接">
        <el-input v-model="form.link" autocomplete="off" />
      </el-form-item>
      <el-form-item label="图片alt">
        <el-input v-model="form.alt" autocomplete="off" />
      </el-form-item>
      <el-form-item label="图片地址">
        <el-input v-model="form.img" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上传商品图片">
        <!-- 上传图片--图片墙 -->
        <!-- action 上传图片的接口地址 -->
        <!-- v-model:file-list 上传图片的数组 -->
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3001/admin/file/upload"
          name="img"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="form.img" :src="form.img" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addLunboHandler()"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { bannerListReq, bannerDeleteReq, bannerAddReq } from "@/api/banner";
import { ref, onMounted, nextTick } from "vue";
let tableData = ref([]);
let lunbo = ref(null);

onMounted(() => {
  console.log(lunbo);
});
function loadlist() {
  bannerListReq().then((r) => {
    console.log(r.data);
    tableData.value = r.data.data;
    nextTick().then((r) => {
      // lunbo.value.setActiveItem(0);
      // lunbo.value.next();
      console.log(lunbo.value.autoplay);

      // lunbo.value.autoplay = true;
      //
      // setInterval(() => {
      //   // lunbo.value.next();
      // }, 2000);
    });
  });
}
loadlist();

function handleEdit(i, row) {
  dialogFormVisible.value = true;
  form.value = row;
}
function handleDelete(i, row) {
  bannerDeleteReq(row.bannerid).then((r) => {
    loadlist();
  });
}
let form = ref({});

let dialogFormVisible = ref(false);
function handleAdd() {
  dialogFormVisible.value = true;
}

// const imageUrl = ref("");

const handleAvatarSuccess = (response, uploadFile) => {
  form.value.img = response.fileUrl;
  console.log(response);
};
function addLunboHandler() {
  bannerAddReq(form.value).then((r) => {
    dialogFormVisible.value = false;
    loadlist();
  });
}
</script>
<style lang="css">
.test {
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
</style>
