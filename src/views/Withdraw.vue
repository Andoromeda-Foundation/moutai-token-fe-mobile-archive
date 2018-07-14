<template>
  <div class="out">
      <br>
      <span>提现金额（元）</span>
      <span style="color:#3F51B5;float:right;">提现说明</span>
      <div class="withdraw has-icons-right">
        <input class="input is-large" type="text" placeholder="输入金额">
            <!-- <span class="icon is-right">
                <i class="delete"></i>
            </span> -->
      </div>
      <div class="detail content">可提现金额8000元，全部提现</div>
      <div>
        <a class="button is-fullwidth is-rounded content"
         style="background-color:#3F51B5;color:#ffffff"
         to="UserWallet" is-link>提取到微信</a>
      </div>
  </div>
</template>
<script>
export default {
  name: "Withdraw",
  data() {
    return {

    };
  },
  methods: {}
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
</style>
