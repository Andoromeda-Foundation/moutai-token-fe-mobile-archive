<template>
    <div class="content">
       <mt-header title="新用户注册"  class="header" ></mt-header>
        <div class="bodyForm">
            <mt-field label="+86>" placeholder="请输入手机号码" v-model="user.phone"></mt-field>
            <mt-field placeholder="请输入验证码" v-model="user.valificationCode">
                <mt-badge @click.native="getValificationCode" size="small" color="#F5F5F5"  style="color: #3F51B5">{{valificationText}}</mt-badge>
            </mt-field>
            <mt-field placeholder="请输入昵称" v-model="user.name"></mt-field>
            <mt-field placeholder="请输入邀请码" v-model="user.invitationCode"></mt-field>
            <mt-button class="btn" @click.native="submitForm">注册</mt-button>

                <router-link :to="{name: 'Login'}">
                    <div class="linkcss">已有账户去登录</div>
                </router-link>
           <!-- <el-form style="top: 20px" :model="user" status-icon :rules="rules2" ref="user" label-width="100px" class="demo-ruleForm">
                <el-form-item label="+86：" prop="phone">
                    <el-input  v-model="user.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item  prop="valificationCode">
                    <div>
                        <el-input v-model="user.valificationCode" auto-complete="off" placeholder="输入验证码"></el-input>
                        <el-button style="float: left" @click="getValificationCode" :disabled="editFlag">{{valificationText}}</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="" prop="name">
                    <el-input v-model="user.name" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item prop="invitationCode">
                    <el-input v-model="user.invitationCode" placeholder="输入邀请码（可选）"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" type="primary" @click="submitForm('user')" round>注册</el-button>
                    &lt;!&ndash;<el-button @click="resetForm('user')">重置</el-button>&ndash;&gt;
                </el-form-item>
                <el-form-item>
                    <a>
                        <router-link :to="{name: 'Login'}">
                            已有账户去登录
                        </router-link>
                    </a>
                </el-form-item>
            </el-form>-->
        </div>
    </div>
</template>
<script>
import config from "../api/service";
import MtHeader from "../../node_modules/mint-ui/packages/header/src/header";
import MtField from "../../node_modules/mint-ui/packages/field/src/field";
import {Toast} from "mint-ui"
export default {
  components: {
      Toast,
    MtField,
    MtHeader
  },
  data() {
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机不能为空"));
      }
      callback();
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    var checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
      } else {
        callback();
      }
    };
    return {
      user: {
        phone: "",
        valificationCode: "1234",
        name: "",
        invitationCode: "ZP143E"
      },
      rules2: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        valificationCode: [{ validator: validateCode, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      },
      token: "",
      valificationText: "获取验证码",
      editFlag: false,
      wait: 60
    };
  },
  methods: {
    submitForm() {
      if (!this.user.phone) {
        Toast("请输入电话号码");
        return;
      }
      if (!this.user.valificationCode) {
        Toast("请输入验证码");
        return;
      }
      if (!this.user.name) {
        Toast("请输入昵称");
        return;
      }
      if (!this.user.invitationCode) {
        Toast("请输入邀请码");
        return;
      }
      this.$ajax({
        method: "post",
        url: `${config.baseUrl.production}/register`,
        data: {
          nickname: this.user.name,
          phone: this.user.phone,
          password: "",
          phoneVerificationCode: this.user.valificationCode,
          invitationCode: this.user.invitationCode
        }
      })
        .then(res => {
          if (res) {
            var data = res.data;
            if (data.statusCode == "200") {
              this.token = data.result.token;
              this.$store.commit("updateToken", data.result.token);
              this.$store.commit("updatePhone",this.user.phone);
              Toast("注册成功");
              this.$router.push("/Login");
            } else {
              Toast(data.message);
            }
          }
        })
        .catch(err => {
          if (err) {
            var data = err.data;
            Toast(data.message);
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getValificationCode() {
    if(this.editFlag){
        Toast("请稍后再试");
        return;
    }
      var phone = this.user.phone;
      if (!phone) {
        Toast("请输入手机号码");
        return;
      }
      this.$ajax({
        method: "post",
        url: `${config.baseUrl.production}/sendValidatePhoneSMS`,
        data: {
          phone: phone,
          type: "register"
        }
      })
        .then(res => {
          if (res) {
              console.error(res)
            var data = res.data;
            if (data.statusCode == "200") {
                Toast("验证码已经生成测试环境默认1234，短信通知后台尚未接入");
              this.countTime();
            } else {
              Toast(data.message);
            }
          }
        })
        .catch(err => {
          if (err) {
            var data = err.data;
            Toast(data.message);
          }
        });
    },
    countTime() {
      if (this.wait == 0) {
        this.editFlag = false;
        this.valificationText = "获取验证码";
        this.wait = 60;
      } else {
        this.editFlag = true;
        this.valificationText = "重新发送(" + this.wait + "s)";
        this.wait--;
        let thiz = this;
        setTimeout(function() {
          thiz.countTime();
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100%;
  margin-bottom: 20px;
  font-size: 10px;
  background-color: white;
}
.bodyForm {
  margin-bottom: 30px;
}
.btn {
    width: 100%;
    color: white;
    background-color: #3f51b5;
    margin-top: 20px;
    border-radius: 2.5rem;
}
.linkcss {
    width: 100%;
    margin-top: 20px;
    margin-left: 30%;
}
a{
    color: #666666;
}
</style>
