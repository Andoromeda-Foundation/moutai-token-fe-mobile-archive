<template>
  <div class="User-view">

    <section>
      <div class="userstatu content">
          <div class="content">
            <img class="image is-48x48" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            <span class="title is-6 name">{{name}}</span>
          </div>
          <div class="maindiv">
            <div class="leftdiv has-text-centered">
                <div>{{amount}}</div>
                <div>资产数量</div>
            </div>
            <div class="centerdiv">
            </div>
            <div class="rightdiv has-text-centered">
                <div>{{allprice}}</div>
                <div>总资产估值</div>
            </div>
          </div>
      </div>
      <mt-cell title="资产列表" to="UserAssets" is-link>
          <img slot="icon" src="https://bulma.io/images/placeholders/96x96.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="交易记录" to="UserTransferList" is-link>
          <img slot="icon" src="https://bulma.io/images/placeholders/96x96.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="钱包" to="UserWallet" is-link>
          <img slot="icon" src="https://bulma.io/images/placeholders/96x96.png" width="24" height="24">
      </mt-cell>
      <div>
	</div>
    </section>

  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      name: "岑夫子",
      amount: 5,
      allprice: 10000
    };
  },
  methods: {}
};
</script>

<style lang="css">
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
