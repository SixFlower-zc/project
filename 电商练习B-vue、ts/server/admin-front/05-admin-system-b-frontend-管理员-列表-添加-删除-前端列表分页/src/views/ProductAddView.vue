<template lang="">
  <div>ProductAdd</div>

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
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :http-request="uploadImgFn"
        :on-success="uploadImgSuccess"
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

  <el-button type="primary" @click="sendHandler()"> 发布 </el-button>
</template>
<script>
import { proSendReq } from "@/api/product.js";
import { updateImgReq } from "@/api/upload.js";
export default {
  data() {
    return {
      //记录 要编辑商品的内容
      eidtForm: {},
      // upload 上传图片组件需要的 文件数组
      fileList: [],
      dialogImageUrl: "", //预览图片的地址
      previewDialogVisible: false
    };
  },
  methods: {
    sendHandler() {
      // fileList -> upload组件 提供的上传图片的数据-
      // 但是这个数据，但是修改接口需要的数据是eidtForm对象
      //  - 要有img1 img2 img3 img4  这几个属性-图片地址
      console.log(this.eidtForm);
      //fileList -》upload组件 提供的上传图片的数据 -->
      // url数据是 临时图片的地址 blob：开头的---response 这个上传图片接口返回的数据
      console.log(this.fileList);
      debugger;

      // ** 将 fileList 处理 到 eidtForm里面，根接口需要的数据一致
      //
      let banners = this.fileList.map((v) => v.response.data.fileUrl);

      // 先将img1 2 3 4 清空
      for (let index = 0; index < 4; index++) {
        this.eidtForm["img" + (index + 1)] = "";
      }
      // 再给对应的img1 2 3 4 赋值
      banners.forEach((v, i) => {
        this.eidtForm["img" + (i + 1)] = v;
      });

      // 调用发布接口
      proSendReq(this.eidtForm).then((r) => {
        console.log(r.data);

        ElMessage({
          message: "发布成功",
          type: "success",
          plain: true
        });
        // 清空表单的值
        this.eidtForm = {};
      });
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
    // 上传图片成功回调--根据文档定义
    uploadImgSuccess(r) {
      console.log(r);
      console.log(r.data.fileUrl);
      console.log(this.fileList);

      console.log(this.fileList);
    },
    // 自定义上传图片方法-根据文档定义
    uploadImgFn(options) {
      console.log(options);
      let fd = new FormData();
      fd.append("img", options.file);
      // fd.append("id", "22");
      return updateImgReq(fd);
    }
    // 图片
  }
};
</script>
<style lang=""></style>
