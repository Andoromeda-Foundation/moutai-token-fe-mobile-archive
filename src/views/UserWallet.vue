<template>
  <div class="has-text-centered">
      <br>
      <img src="https://bulma.io/images/placeholders/96x96.png"/>
      <div style="font-size:15px;padding:10px">提现金额（元）</div>
      <div style="font-size:40px;font-weight:bold">¥{{balance}}</div>
      <div style="padding:10px">
        <a class="button is-fullwidth is-rounded content"
         style="background-color:#3F51B5;color:#ffffff"
         href="/#/Withdraw">提现</a>
      </div>
  </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import config from "../api/service.js"
export default {
  name: "UserWallet",
  data() {
    return {
      balance:0,
    };
  },
    computed:{
        ...mapGetters({
            token: "getToken"
        })
    },
  methods: {},
  created(){
      let thiz = this;
      this.$http.get(`${config.baseUrl.production}/user` ,
          {headers: {'token': thiz.token}})
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