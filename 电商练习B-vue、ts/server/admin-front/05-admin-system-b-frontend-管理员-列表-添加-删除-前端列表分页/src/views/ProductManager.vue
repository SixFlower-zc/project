<template>
  <div>
    商品管理

    <el-table :data="tableData" style="width: 100%; height: 80vh">
      <el-table-column label="商品名称" prop="proname" width="180">
        <!-- scope.$index, 当前的行数   scope.row    当前行的 对应 的数组中 元素 -->
        <!-- 具名插槽--  scope--作用域插槽--把组件内部的数据 反向传递给父组件 -->
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span>{{ scope.row.proname }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="商品价格" prop="originprice">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span>{{ scope.row.originprice }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="商品分类" prop="category">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span>{{ scope.row.category }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="商品图片" prop="img1">
        <template #default="scope">
          <!-- :preview-teleported="true" 传送到 body中 -->
          <el-image
            :preview-teleported="true"
            style="width: 100px; height: 100px"
            :src="scope.row.img1"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[scope.row.img1]"
            fit="cover"
          />
        </template>
      </el-table-column>

      <el-table-column prop="sales" label="销量" />
      <el-table-column prop="stock" label="库存" />

      <el-table-column label="是否售卖">
        <template #default="scope">
          <!-- :active-value="1"  设置开的值
            :inactive-value="0"  设置关的值-->
          <el-switch
            v-model="scope.row.issale"
            :active-value="1"
            :inactive-value="0"
            @change="handlerChangeSale(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 编辑 </el-button>

          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="pagenum"
      :page-size="pagesize"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="pageNumChange"
    />
  </div>

  <!-- 编辑的时候 弹出对话框 -->
  <el-dialog v-model="isEdit" title="商品编辑" width="500">
    <el-form :model="eidtForm">
      <el-form-item label="商品名称">
        <el-input v-model="eidtForm.proname" autocomplete="off" />
      </el-form-item>

      <el-form-item label="商品价格">
        <el-input v-model="eidtForm.originprice" autocomplete="off" />
      </el-form-item>

      <el-form-item label="商品品牌">
        <el-input v-model="eidtForm.brand" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品分类">
        <el-input v-model="eidtForm.category" autocomplete="off" />
      </el-form-item>

      <el-form-item label="商品库存">
        <el-input v-model="eidtForm.stock" autocomplete="off" />
      </el-form-item>

      <el-form-item label="是否售卖">
        <el-switch v-model="eidtForm.issale" :active-value="1" :inactive-value="0" />
      </el-form-item>

      <el-form-item label="商品图片">
        <!-- 上传图片--图片墙 -->
        <!-- action 上传图片的接口地址 -->
        <!-- v-model:file-list 上传图片的数组 -->
        <el-upload
          v-model:file-list="fileList"
          action="http://localhost:3001/admin/file/upload"
          name="img"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="previewDialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-form-item>

      <el-form-item label="详情">
        <el-input v-model="eidtForm.desc" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isEdit = false">取消</el-button>
        <el-button type="primary" @click="saveHandler()"> 保存 </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 删除的时候 弹框的对话框 -->
  <el-dialog v-model="dialogVisible" title="提示" width="500" :before-close="handleClose">
    <span>是否删除</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="deleteConfirm"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { proListReq, proUpdateReq, proDeleteReq } from "@/api/product";
export default {
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      tableData: [],

      // 删除弹框的--控制
      dialogVisible: false,
      deleteRow: {},

      //编辑对话框的显示和隐藏
      isEdit: false,
      //记录 要编辑商品的内容
      eidtForm: {},

      // upload 上传图片组件需要的 文件数组
      fileList: [{ name: "", url: "" }],
      dialogImageUrl: "", //预览图片的地址
      previewDialogVisible: false,
      // srcList: []

      // 记录最大页码 分页组件
      total: 0
    };
  },
  created() {
    this.loadList();
  },
  methods: {
    //分页的 页码改变
    pageNumChange() {
      console.log(this.pagenum);
      this.loadList();
    },

    //对话点击关闭的操作
    handleClose() {
      console.log("handleClose");
      this.dialogVisible = false;
    },
    async loadList() {
      let r = await proListReq(this.pagenum, this.pagesize);
      console.log(r.data);
      this.tableData = r.data.data;
      this.total = r.data.total;
    },
    // 修改 售卖状态
    handlerChangeSale(index, row) {
      console.log(index, row);
      // 调用修改接口-传入pid和修改以后的状态
      proUpdateReq(row.proid, { issale: row.issale }).then((r) => {
        console.log(r.data);
      });
    },
    // 删除事件
    handleDelete(index, row) {
      // proDeleteReq(row.proid).then((r) => {
      //   console.log(r.data);
      // });
      // 弹出了 对话框
      this.dialogVisible = true;
      //报错了要 删除的 行一行的数据
      this.deleteRow = row;
    },
    //删除-弹框的 确定按钮的事件
    deleteConfirm() {
      //调用删除商品接口-传入pid--
      proDeleteReq(this.deleteRow.proid).then((r) => {
        console.log(r.data);
        //删除成功以后刷新列表-隐藏对话框
        this.loadList();
        this.dialogVisible = false;
      });
    },

    handleEdit(index, row) {
      // debugger;
      console.log(row);
      // 弹框出现
      this.isEdit = true;
      // 要编辑id信息 保存eidtForm
      this.eidtForm = { ...row };
      // this.fileList
      // 把服务器返回的 图片数据转为   upload组件需要的图片数据
      // row ->商品对象-》 row.img1 img2 img3
      this.fileList = [];
      //循环遍历 1 2 3 4
      for (let index = 1; index < 5; index++) {
        let imgKey = "img" + index;
        let imgUrl = this.eidtForm[imgKey];
        if (imgUrl != "") {
          this.fileList.push({
            name: imgKey,
            url: imgUrl
          });
        }
      }
    },
    //点击 预览按钮-
    handlePictureCardPreview(fileObj) {
      //fileObj - 预览fileList 中一个对象
      this.previewDialogVisible = true;
      this.dialogImageUrl = fileObj.url;
    },
    //点击 upload 图片墙 的删除按钮
    handleRemove(fileObj, fileList) {
      console.log(fileObj, fileList);
    },
    // 点击保存
    saveHandler() {
      debugger;
      console.log(this.fileList);
      //先映射出 真实的 图片地址
      let banners = this.fileList.map((v) => {
        if (v?.response?.data?.fileUrl) {
          return v.response.data.fileUrl;
        } else {
          return v.url;
        }
      });
      for (let i = 1; i < 5; i++) {
        this.eidtForm["img" + i] = "";
      }

      // 再给对应的img1 2 3 4 赋值
      banners.forEach((v, i) => {
        this.eidtForm["img" + (i + 1)] = v;
      });

      // 调用修改接口
      proUpdateReq(this.eidtForm.proid, { ...this.eidtForm }).then((r) => {
        console.log(r.data);
        this.isEdit = false;
        this.loadList();
      });
    }
  }
};
</script>
<style lang=""></style>
