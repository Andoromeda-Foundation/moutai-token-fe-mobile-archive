<template>
  <div>
      <!--<img src="https://bulma.io/images/placeholders/96x96.png"/>-->
      <div class="headerTitle">
          <h1>我的钱包</h1>
      </div>
      <div class="banerHead">
         <div class="banerImage">
             <span class="logo">¥</span>
         </div>
      </div>
      <div  class="has-text-centered">
      <div style="font-size:15px;padding:10px">提现金额（元）</div>
      <div style="font-size:40px;font-weight:bold">¥{{balance}}</div>
      <div style="padding:10px">
        <a class="button is-fullwidth is-rounded content"
         style="background-color:#3F51B5;color:#ffffff"
         href="/#/Withdraw">提现</a>
      </div>
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

<style scoped>
    .headerTitle{
     display: flex;
        justify-content: center;
        margin-top: 10px;
        font-size: 1.5rem;
        color: #333333;
        font-weight: 200;
    }
    .banerHead{
        display: flex;
        justify-content: center;
        justify-items: center;
        margin-top: 2rem;
    }
    .banerImage{
        width: 100px;
        height: 100px;
        background: #3F51B5;
        background: #3F51B5;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        color: #ffff;
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1.2rem 0 1rem;
        font-family: ShanghaiFace-Rock-BoldGB-Regular;
        font-size: 4rem;
    }
</style>