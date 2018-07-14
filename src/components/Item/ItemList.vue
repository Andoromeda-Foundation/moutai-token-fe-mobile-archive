<template>
    <div id="item-list" >
        <div class="columns" v-for="(row,idx) in rows" :key="idx">
            <div class="column" v-for="good in row" :key="good.tokenId" @click="gotoDetail(good)">
                <item-card v-bind="good"/> 
            </div>
        </div>
    </div>
</template>

<script>
import config from "../../api/service";
import { splitEvery } from "ramda";
import ItemCard from "./ItemCard";
import {mapGetters} from "vuex"
export default {
  components: {
    ItemCard
  },
  name: "ItemList",
  computed: {
    rows() {
      return splitEvery(4, this.goods);
    },
      ...mapGetters({
          token: "getToken"
      })
  },
  async created() {
      let thiz = this;
    const { body } = await this.$http.get(
      `${config.baseUrl.production}/spirits`
    );
    var data = body.result;
    for(var item in data){
        data[item].coverFileDownloadUrl = `${config.baseUrl.imageUrl}`+ data[item].coverFileDownloadUrl;
    }
    console.error(data)
    this.goods = body.result;
  },
  methods: {
    gotoDetail(info) {
      this.$router.push({ path: `/detail/${info.id}`});
    }
  },
  data: () => ({
    goods: [
      {
        name: "茅台",
        img:
          "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        price: "514",
        owner: "TNOK",
        tokenId: 11455
      },
      {
        name: "茅台",
        img:
          "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        price: "514",
        owner: "李田所",
        tokenId: 11414
      },
      {
        name: "茅台",
        img:
          "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        price: "514",
        owner: "王道往",
        tokenId: 111
      },
      {
        name: "茅台经典",
        img:
          "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        price: "514",
        owner: "李田所",
        tokenId: 11454
      },
      {
        name: "B",
        img:
          "https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg",
        price: "114",
        owner: "王田所",
        tokenId: 810
      },
      {
        name: "C",
        img:
          "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        price: "1",
        owner: "田所好二",
        tokenId: 1919
      }
    ]
  })
};
</script>

<style scoped>
#item-list {
  max-width: 90%;
  margin: 0 auto;
}
.column {
  width: 50%;
  padding: 0.25rem;
  float: left;
}
</style>
