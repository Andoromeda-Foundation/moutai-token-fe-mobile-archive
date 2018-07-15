<template>
    <div class="content">
        <mt-header class="header" title="登录">

        </mt-header>
        <div class="headerImage">
            <!--<img src="https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg" alt="Identicon" style="border-radius: 50%;  width: 100px;">-->
            <div class="banerImage"><span class="logo">白酒银行</span></div>
        </div>
        <div class="bodyForm">
            <mt-field label="+86>" placeholder="请输入手机号码" v-model="user.phone"></mt-field>
            <mt-field placeholder="请输入验证码" v-model="user.valificationCode">
                <mt-badge @click.native="getValificationCode" size="small" color="#F5F5F5"  :disabled="editFlag" style="color: #3F51B5">{{valificationText}}</mt-badge>
            </mt-field>
            <mt-button class="btn" @click.native="submitForm">登录</mt-button>

                <router-link :to="{name: 'Registered'}" style="text-decoration: none">
                    <div  class="linkcss">
                   <span>没有账号去注册</span>
                    </div>
                </router-link>
          <!--  <el-form :model="user"  status-icon :rules="rules2" ref="user" label-width="100px" class="demo-ruleForm">
                <el-form-item label="+86：" prop="phone">
                    <el-input  v-model="user.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item  prop="valificationCode">
                    <div>
                        <el-input v-model="user.valificationCode" auto-complete="off" placeholder="输入验证码"></el-input>
                        <el-button style="float: left" @click="getValificationCode" :disabled="editFlag">{{valificationText}}</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" type="primary" @click="submitForm('user')" round>登录</el-button>
                </el-form-item>
                <el-form-item>
                    <a>
                        <router-link :to="{name: 'Registered'}">
                            没有账号去注册
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
import MtButton from "../../node_modules/mint-ui/packages/button/src/button";
import MtField from "../../node_modules/mint-ui/packages/field/src/field";
import MtBadge from "../../node_modules/mint-ui/packages/badge/src/badge";
import {Toast} from "mint-ui";
import {mapGetters} from "vuex";
export default {
  components: {
      Toast,
      MtBadge,
    MtField,
    MtButton,
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
    return {
      user: {
        phone: "",
        valificationCode: "1234"
      },
      rules2: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        valificationCode: [{ validator: validateCode, trigger: "blur" }]
      },
      valificationText: "获取验证码",
      editFlag: false,
      wait: 60
    };
  },
    created(){
//      this.user.phone=!this.newPhone?"13823703379":this.newPhone;
        this.user.phone=this.newPhone;
    },
    computed:{
        ...mapGetters({
            newPhone: "getPhone"
        })
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
      this.$ajax({
        method: "post",
        url: `${config.baseUrl.production}/loginByPhoneVerificationCode`,
        data: {
          phone: this.user.phone,
          phoneVerificationCode: this.user.valificationCode
        }
      })
        .then(res => {
          if (res) {
            var data = res.data;
            if (data.statusCode == "200") {
              console.log(data);
              this.token = data.result.token;
              this.$store.commit("updateToken", data.result.token);
              this.$router.push("/home");
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
          type: ""
        }
      })
        .then(res => {
          if (res) {
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
.headerImage {
  margin-bottom: 30px;
}
.bodyForm {
     margin-bottom: 30px;
 }
.btn {
  width: 100%;
  color: white;
  background-color: #3F51B5;
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

.banerImage{
    display: flex;
    width: 100px;
    height: 100px;
    background: linear-gradient(to left,#7389DB,#3F51B5);
    background: -webkit-gradient(linear,right top, left top,from(#7389DB),to(#3F51B5));
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    color: #ffff;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.2rem 0 1.7rem;
    font-family: ShanghaiFace-Rock-BoldGB-Regular;
    font-size: 22.5px;
}
</style>
