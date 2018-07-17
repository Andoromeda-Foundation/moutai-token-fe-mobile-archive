<template>
  <div class="Detail-view">
    <mt-navbar v-model="tabindex">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">价格趋势</mt-tab-item>
      <mt-tab-item id="3">交易历史</mt-tab-item>
      <mt-tab-item id="4">讨论区</mt-tab-item>
      <mt-tab-item id="5">新闻</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="tabindex">
      <mt-tab-container-item id="1">
          <img :src="sakeinfo.coverFileDownloadUrl" width="100%" />
          <div class="detaildiv">
            <p class="title is-6 price">¥ {{ sakeinfo.nextPrice }}</p>
            <p class="title is-6">{{ sakeinfo.title }}</p>
            <p class="detail">拥有者：{{ sakeinfoowner.nickname }}</p>
            <p class="detail">解锁时间：{{ sakeinfo.freezeTo }}</p>
          </div>
          <div class="line"></div>
          <div class="detaildiv">
            <p><a class="detail">品牌：</a><a class="content">{{ sakeinfo.brand }}</a></p>
            <p><a class="detail">年份：</a><a class="content">{{ sakeinfo.time }}</a></p>
            <p><a class="detail">度数：</a><a class="content">{{ sakeinfo.degree }}</a></p>
            <p><a class="detail">规格：</a><a class="content">{{ sakeinfo.specification }}</a></p>
          </div>
       <!--   <div class="field">
            <mt-button class="button" type="default">主页</mt-button>
            <mt-button class="button" type="default">客服</mt-button>
            <mt-button class="button" type="danger" @click="buySake()">立即认购</mt-button>
          </div>-->
          <div style="width: 100%; height: 50px;"></div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2" class="detaildiv tabheight">
          <p>价格趋势</p>
          <div id="main" style="width: 100%;height: 400px;"></div>
      </mt-tab-container-item>

      <mt-tab-container-item id="3" class="detaildiv tabheight">
          <p>交易历史</p>
          <br>
          <div class="cell" v-for="item in transList">
            <img slot="icon" :src="sakeinfo.coverFileDownloadUrl" width="30" height="30">
            <span class="content">{{ sakeinfo.title }}</span>
            <br>
            <span class="content">{{ item.fromUser.nickname }} → {{ item.toUser.nickname }} {{ item.updatedAt }}</span>
            <br>
            <span class="content">转让 ¥{{ item.price }}</span>
          </div>
          <div class="lineslim"></div>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="4" class="detaildiv tabheight">
        <Comment :comments="commentsList" :goodId="goodId"/>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="5" class="detaildiv tabheight">
          <p>新闻</p>
          <div class="" v-for="item in newsList">
            <div class="content" style="width: calc(100% - 20px);">{{ item.title }}</div>
            <div style="width: 100%; height: 10px;" />
            <div class="detail" style="margin-bottom: 10px;">{{ item.updatedAt }}</div>
            <div class="lineslim"></div>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <GeneralTabBar :menus="menus">
      <mt-tab-item id="" @click.native="buySake()">
        <mt-button type="primary">立即认购</mt-button>
      </mt-tab-item>
    </GeneralTabBar>
  </div>
</template>

<script>
import config from "../api/service";
import { mapGetters } from "vuex";
import { Toast, MessageBox } from "mint-ui";
import Comment from "../components/Detail/Comment";
import GeneralTabBar from "../components/GeneralTabBar";

import echarts from "echarts";
export default {
  name: "Detail",
  data: () => ({
    menus: [
      {
        name: '主页',
        location: '/',
        logo: "/assets/images/home.png"
      },
      {
        name: '客服',
        location: '',
        logo: "/assets/images/customer.png"
      }
    ],
    tabindex: "1",
    transList: [],
    commentsList: [],
    newsList: [],
    sakeinfo: {},
    sakeinfoowner: {},
    chartsdata: {
      charts: "",
      opinion: [],
      opinionData: []
    }
  }),
  components: {
    MessageBox,
    Toast,
    GeneralTabBar,
    Comment
  },
  computed: {
    ...mapGetters({ token: "getToken" }),
    goodId() {return this.$route.params.id}
  },
  created() {
    this.$http
      .get(`${config.baseUrl.production}/spirits/${this.$route.params.id}`, {
        headers: { token: this.token }
      })
      .then(response => {
        if (response.body.statusCode == 200) {
          console.log(response.body.result)
          var data = response.body.result;
          data.coverFileDownloadUrl =
            `${config.baseUrl.imageUrl}` + data.coverFileDownloadUrl;
          this.sakeinfo = data;
          this.sakeinfoowner = this.sakeinfo.user;
        }
      });
    
    this.$http
      .get(`${config.baseUrl.production}/spirits/${this.$route.params.id}/news`, {
        headers: { token: this.token }
      })
      .then(response => {
        if (response.body.statusCode == 200) {
          this.newsList = response.body.result;
        }
      });

    this.$http
      .get(
        `${config.baseUrl.production}/spirits/${this.$route.params.id}/trades`,
        { headers: { token: this.token } }
      )
      .then(response => {
        if (response.body.statusCode == 200) {
          this.transList = response.body.result;
          this.chartsdata.opinionData = this.transList.map(function(value){
          　　return value.price;
          })
          this.chartsdata.opinionData = this.chartsdata.opinionData.reverse()
          this.chartsdata.opinion = this.transList.map(function(value){
          　　return "";
          })
          this.drawPie("main");
        }
      });

      this.$http
      .get(`${config.baseUrl.production}/spirits/${this.$route.params.id}/message`, {
        headers: { token: this.token }
      })
      .then(response => {
        if (response.body.statusCode == 200) {
          this.commentsList = response.body.result;
        }
      });
  },
  methods: {
    buySake(index) {
      if (!this.token) {
        MessageBox("提示", "请先登录");
        this.$router.push("/Login");
        return;
      }
      const jsonData = { price: this.sakeinfo.nextPrice };
      this.$http
        .post(
          `${config.baseUrl.production}/spirits/${this.$route.params.id}/buy`,
          jsonData,
          { headers: { token: this.token } }
        )
        .then(response => {
          const res = response.body;
          console.log(res);
          if (response.body.statusCode == 200) {
            Toast("购买成功");
          } else if (
            response.body.statusCode == 500 ||
            response.body.statusCode == 401
          ) {
            Toast(response.body.message);
          }
        });
    },
      menuTab(){

      },

drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.chartsdata.opinion
        },
        yAxis: {
          type: "value"
        },
        itemStyle: {
          color: "#6bb6f9"
        },
        series: [
          {
            data: this.chartsdata.opinionData,
            type: "line",
            areaStyle: {}
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      // this.drawPie("main");
    });
  }

};
</script>

<style lang="css" scoped>
.detaildiv {
  margin: 10px;
}
.price {
  color: #4450b2;
}
.line {
  width: 100%;
  height: 10px;
  background: #e7e7e7;
}
.detail {
  font-size: 14px;
  color: #aaa;
}
.content {
  font-size: 14px;
  color: #000;
}
.field {
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
.button {
  margin-left: 5px;
  margin-right: 5px;
}

/**
tab3
**/
.lineslim {
  width: 100%;
  height: 1px;
  background: #e7e7e7;
  margin-bottom: 10px;
}
.columns {
  height: 35px;
}
.cell {
  width: -webkit-calc(100% - 20px);
  margin-bottom: 20px;
}
.tabheight {
  margin-bottom: 50px;
}

/**
tab4
**/
.commit {
  margin-left: 40px;
  margin-top: -30px;
  margin-bottom: 10px;
}

/**
tab5
**/
</style>
