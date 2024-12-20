<template>
  <div class="app_login">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>xxx管理系统</span>
        </div>
      </template>

      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="adminname">
          <el-input v-model="ruleForm.adminname" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()"> 登录 </el-button>
          <el-button type="primary" @click="submitForm()"> 登录 </el-button>
        </el-form-item>
      </el-form>

      <template #footer>Footer content</template>
    </el-card>
  </div>
</template>

<script>
import { loginReq } from "@/api/user.js";
import { useUserStore } from "@/stores/user.js";
export default {
  setup(props) {
    let userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      //表单数据
      ruleForm: {
        adminname: "admin",
        password: "123456"
      },
      //表单检验规则
      rules: {
        //用户名的校验规则
        adminname: [
          {
            //校验函数
            validator: function (rule, value, callback) {
              //至少5位的数子字母
              let usernaneReg = /^[0-9a-zA-Z]{5,}$/;
              if (usernaneReg.test(value)) {
                callback(); //通过校验
              } else {
                // 不通过校验
                callback(new Error("用户名只能是至少5位的数子字母"));
              }
            },
            //校验函数的触发时机
            trigger: "blur"
          }
        ],
        //用户名的校验规则
        password: [
          {
            //校验函数
            validator: function (rule, value, callback) {
              //至少5位的数子字母
              let usernaneReg = /^.{6,}$/;
              if (usernaneReg.test(value)) {
                callback(); //通过校验
              } else {
                // 不通过校验
                callback(new Error("密码至少6位"));
              }
            },
            //校验函数的触发时机
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      //点击登录按钮
      console.log(this.$refs.ruleFormRef);

      //ruleFormRef--表单组件实例--调用组件实例的validate获取表单验证的结果-
      this.$refs.ruleFormRef.validate((valid) => {
        console.log(valid); //布尔值
        if (valid) {
          console.log("submit!");
          //   调用登录接口
          loginReq(this.ruleForm.adminname, this.ruleForm.password).then((r) => {
            console.log(r.data);
            localStorage.setItem("token", r.data.data.token);

            //存入 pinia
            this.userStore.username = r.data.data.adminname;
            this.userStore.token = r.data.data.token;

            // 登录成功以后跳转到首页
            this.$router.push("/");
          });
        } else {
          console.log("error submit!");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app_login {
  height: 100%;
  background-image: url("@/assets/imgs/bg.jpg");

  display: flex;
  .el-card {
    width: 400px;
    height: 300px;
    margin: auto;
    .card-header {
      text-align: center;
    }
  }
}
</style>
