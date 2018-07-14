<template>
  <div class="has-text-centered">
      <br>
      <img src="https://bulma.io/images/placeholders/96x96.png"/>
      <div style="font-size:15px;padding:10px">提现金额（元）</div>
      <div style="font-size:40px;font-weight:bold">{{balance}}</div>
      <div style="padding:10px">
        <a class="button is-fullwidth is-rounded content"
         style="background-color:#3F51B5;color:#ffffff"
         href="/#/Withdraw">提现</a>
      </div>
  </div>
</template>
<script>
export default {
  name: "UserWallet",
  data() {
    return {
      balance:0,
    };
  },
  methods: {},
  created(){
    this.$http.get('http://47.75.74.227:8080/api/user', 
      {headers: {'token': 'eb8f7736127b3af7ab12558a74cc5c50'}})
    .then(response => {
        const results = response.body.result;
        this.balance = results.balance;
        console.log(response.body.result.balance)
    }, response => {
      // error callback
    });
  }
};
</script>