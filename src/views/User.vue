<template>
  <div class="User-view">
    <section>
      <div class="userstatu content">
          <div class="content">
            <img class="image is-48x48" src="../assets/images/mine.png" alt="Placeholder image">
            <span class="title is-6 name">{{nickname}}</span>
          </div>
          <div class="maindiv">
            <div class="leftdiv has-text-centered">
                <div>{{assetCount}}</div>
                <div>资产数量</div>
            </div>
            <div class="centerdiv">
            </div>
            <div class="rightdiv has-text-centered">
                <div>{{assetPrice}}</div>
                <div>总资产估值</div>
            </div>
          </div>
      </div>
      <mt-cell title=" 资产列表" to="UserAssets" is-link>
          <img slot="icon" src="../assets/images/UserAssetsList.png" width="24" height="24">
      </mt-cell>
      <mt-cell title=" 交易记录" to="UserTransferList" is-link>
          <img slot="icon" src="../assets/images/UserTransferList.png" width="24" height="24">
      </mt-cell>
      <mt-cell title=" 钱包" to="UserWallet" is-link>
          <img slot="icon" src="../assets/images/UserWallet.png" width="24" height="24">
      </mt-cell>
        <mt-cell title=" 安全退出" @click.native="Logout()">
            <img slot="icon" src="../assets/images/Logout.png"  width="24" height="24">
        </mt-cell>
      <div>
	</div>
    </section>

  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import config from "../api/service.js"
    import MtCell from "../../node_modules/mint-ui/packages/cell/src/cell";
export default {
    components: {MtCell},
    name: "User",
  data() {
    return {
      nickname: "name",
      assetCount: 0,
      assetPrice: 0
    };
  },
    computed:{
        ...mapGetters({
            token: "getToken"
        })
    },
  methods: {
    Logout(){
        this.$store.commit("updateToken","");
        this.$router.push("/");
    }
  },
  created(){
      let thiz = this;
    this.$http.get(`${config.baseUrl.production}/user`,
      {headers: {'token': thiz.token}})//'eb8f7736127b3af7ab12558a74cc5c50'
    .then(response => {
        const results = response.body.result;
        this.nickname = results.nickname;
        this.assetCount = results.assetCount;
        this.assetPrice = results.assetValue;
    }, response => {
      // error callback
    });
  }
};
</script>

<style lang="css" scoped>
.userstatu {
  padding-left: 0px;
  padding-top: 35px;
  background-color: #3f51b5;
}
.name {
  padding-left: 0px;
  color: #ffffff;
}
</style>
<style scoped>
img {
  margin-left: 15px;
  vertical-align: middle;
  display: inline-block;
  float: none;
}
.name {
  margin-left: 15px;
  float: none;
  display: inline-block;
  vertical-align: middle;
}
.maindiv {
  width: 100%;
  padding: 10px;
  overflow: hidden; /*关键*/
}

.leftdiv {
  float: left;
  width: 50%;
  color: #ffffff;
}

.rightdiv {
  float: right;
  width: 50%;
  color: #ffffff;
}

.centerdiv {
  float: left;
  width: 0%;
  border-right: 1px dashed white;
  padding-bottom: 1600px; /*关键*/
  margin-bottom: -1600px; /*关键*/
}
</style>
