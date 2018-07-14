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
      // {
      //   name: "茅台",
      //   img:
      //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
      //   price: "514",
      //   owner: "TNOK",
      //   tokenId: 11455
      // },
      // {
      //   name: "茅台",
      //   img:
      //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
      //   price: "514",
      //   owner: "李田所",
      //   tokenId: 11414
      // },
      // {
      //   name: "茅台",
      //   img:
      //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
      //   price: "514",
      //   owner: "王道往",
      //   tokenId: 111
      // },
      // {
      //   name: "茅台经典",
      //   img:
      //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
      //   price: "514",
      //   owner: "李田所",
      //   tokenId: 11454
      // },
      // {
      //   name: "B",
      //   img:
      //     "https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg",
      //   price: "114",
      //   owner: "王田所",
      //   tokenId: 810
      // },
      // {
      //   name: "C",
      //   img:
      //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
      //   price: "1",
      //   owner: "田所好二",
      //   tokenId: 1919
      // }
    ]
  }),
  created() {
      let thiz = this;
//    this.$http.get('http://47.75.74.227:8080/api//user/spirits',
      this.$http.get(`${config.baseUrl.production}/user/spirits`,
          {headers: {'token': thiz.token}})
    .then(response => {
      console.log(response.body)
      this.goods = response.body.result || [];
    }, response => {
      // error callback
    });
  }
};
</script>

<style scoped>
#item-list {
  max-width: 90%;
  margin: 0 auto;
}
</style>
