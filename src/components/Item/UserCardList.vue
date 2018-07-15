<template>
    <div id="user-card-list" >
        <div class="columns" v-for="(row,idx) in rows" :key="idx">
            <div class="column" v-for="good in row" :key="good.tokenId" @click="Transfer(good)">
                <user-card v-bind="good" /> 
            </div>
        </div>
    </div>
</template>

<script>
import { splitEvery } from "ramda";
import UserCard from "./UserCard";
import {mapGetters} from "vuex";
import config from "../../api/service.js"
export default {
  components: {
    UserCard
  },
  name: "UserCardList",
  computed: {
    rows() {
      return splitEvery(4, this.goods);
    },
    ...mapGetters({
        token: "getToken"
    })
  },
 methods:{
     Transfer(good){
           this.$router.push({path:`/Transfer/${good.id}`})
      }
 },
  data: () => ({
    goods: [
    ]
  }),
  created() {
    let thiz = this;
//    this.$http.get('http://47.75.74.227:8080/api//user/spirits',
    console.log(thiz.token);
    this.$http.get(`${config.baseUrl.production}/user/spirits`,
          {headers: {'token': thiz.token}})
    .then(response => {
      console.log(response.body)
      var data = response.body.result || [];
      for(var item in data){
        data[item].coverFileDownloadUrl = `${config.baseUrl.imageUrl}`+ data[item].coverFileDownloadUrl;
        data[item].name = data[item].brand;
        data[item].owner = data[item].user.nickname;
        data[item].price = data[item].currentPrice;
      }
      this.goods = data;
    }, response => {
      // error callback
    });
  },
};
</script>

<style scoped>
#item-list {
  max-width: 90%;
  margin: 0 auto;
}
</style>
