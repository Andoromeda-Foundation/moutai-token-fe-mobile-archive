<template>
<!-- <div>
<div class="black" v-show="messageshowed"></div> -->
  <div class="out">
      <br>
      <span>提现金额（元）</span>
      <a style="color:#3F51B5;float:right;" @click="showmessage">提现说明</a>
      <div class="withdraw has-icons-right">
        <input class="input is-large" type="text" placeholder="输入金额">
            <!-- <span class="icon is-right">
                <i class="delete"></i>
            </span> -->
      </div>
      <div class="detail content">可提现金额{{balance}}元，全部提现</div>
      <div>
        <a class="button is-fullwidth is-rounded content"
         style="background-color:#3F51B5;color:#ffffff"
         to="UserWallet" is-link>提取到微信</a>
      </div>
      <br>
      <article class="message is-dark" v-show="messageshowed">
        <div class="message-header">
            <p>提现说明</p>
            <button class="delete" aria-label="delete" @click="hidemessage"></button>
        </div>
        <div class="message-body detail">
            <div>1. 每笔提现金额最少1000元； </div>
            <div>2. 每日账户提现上限为2万元，超出请联系我们； </div>
            <div>3. 为保证您的资金安全，提现申请需实名认证； </div>
            <div>4. 提现申请平台处理后，会转入到您的微信零钱； </div>
            <div>5. 每天0:00-8:00为系统升级时间，暂时关闭提现功能； </div>
            <div>6. 如需其他帮助，请联系021-8889999.</div>
        </div>
        <div class="withdraw">
          <a class="button is-fullwidth is-rounded"
            @click="hidemessage"
            style="background-color:#3F51B5;color:#ffffff"
            to="UserWallet" is-link>我知道了</a>
        </div>
    </article>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "Withdraw",
  data() {
    return {
        messageshowed: false,
        balance: 0,
    };
  },
  methods: {
      showmessage: function(){
          this.messageshowed = true;
      },
      hidemessage: function(){
          this.messageshowed = false;
      }
  },
  created(){
    this.$http.get('http://47.75.74.227:8080/api/user', 
      {headers: {'token': 'eb8f7736127b3af7ab12558a74cc5c50'}})
    .then(response => {
        const results = response.body.result;
        this.balance = results.balance;
        console.log(response.body)
    }, response => {
      // error callback
    });
  }
};
</script>
<style lang="css" scoped>
.withdraw{
    font-size:15px;
    padding:10px;
}
.out{
    font-size:15px;
    padding:20px;
}
.detail {
  font-size: 10px;
  color: #aaa;
  padding:10px
}
.message{
  position:fixed;
  bottom: 0px;
  padding-bottom: 60px;
}
/* .black{
    width:100%;
    height:100%;
    background-color:#000000cc;
    position:absolute;
} */
</style>
