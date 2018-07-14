<template>
    <div id="user-card-list" >
        <div class="columns" v-for="(row,idx) in rows" :key="idx">
            <div class="column" v-for="good in row" :key="good.tokenId">
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
    }
  },

  data: () => ({
    goods: [
      {
      "id": 0,
      "title": "string",
      "status": "string",
      "coverFile": "string",
      "coverFileDownloadUrl": "string",
      "brand": "string",
      "region": "string",
      "time": 0,
      "degree": 0,
      "specification": 0,
      "currentPrice": 0,
      "nextPrice": 0,
      "freezeTo": "string",
      "description": "string",
      "history": [
        {}
      ],
      "userId": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
    ]
  }),
  created() {
      let thiz = this;
//    this.$http.get('http://47.75.74.227:8080/api//user/spirits',
    // this.$http.get(`${config.baseUrl.production}/user/spirits`,
    //       {headers: {'token': thiz.token}})
    // .then(response => {
    //   console.log(response.body)
    //   this.goods = response.body.result || [];
    // }, response => {
    //   // error callback
    // });
  },
};
</script>

<style scoped>
#item-list {
  max-width: 90%;
  margin: 0 auto;
}
</style>
