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
          <img src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" width="100%" />
          <div class="detaildiv">
            <p class="title is-6 price">¥ 2100.00</p>
            <p class="title is-6">贵州茅台吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦</p>
            <p class="detail">拥有者：张三     解锁时间：12天12时00分00秒</p>
          </div>
          <div class="line"></div>
          <div class="detaildiv">
            <p><a class="detail">品牌：</a><a class="content">茅台</a></p>
            <p><a class="detail">年份：</a><a class="content">2000</a></p>
            <p><a class="detail">度数：</a><a class="content">50%vol</a></p>
            <p><a class="detail">规格：</a><a class="content">500ml</a></p>
          </div>
          <div class="field">
            <mt-button class="button" type="default">主页</mt-button>
            <mt-button class="button" type="default">客服</mt-button>
            <mt-button class="button" type="danger">立即认购</mt-button>
          </div>
          <div style="width: 100%; height: 50px;"></div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2" class="detaildiv tabheight">
          <p>价格趋势</p>
      </mt-tab-container-item>

      <mt-tab-container-item id="3" class="detaildiv tabheight">
          <p>交易历史</p>
          <mt-cell class="cell" v-for="item in transList" title="飞天茅台" label="XXX02 → 白酒银行     2017/07/01 07:09">
            <span>转让     ¥2100.00</span>
            <img slot="icon" src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" width="30" height="30">
          </mt-cell>
          <!-- <div class="lineslim"></div> -->
      </mt-tab-container-item>
      
      <mt-tab-container-item id="4" class="detaildiv tabheight">
          <mt-cell class="cell" title="讨论区">
            <mt-button class="button" type="default" size="small">发表评论</mt-button>
          </mt-cell>
          <div class="" v-for="item in commitList">
              <div>
                <img src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" style="width: 30px; height: 30px; border-radius:50%;"/>
              </div>
              <div class="commit">
                <div class="content">茅台</div>
                <div style="width: 100%; height: 10px;" />
                <div class="content" style="width: calc(100% - 20px);">
                  这是Qtum量子链钱包的“概览”界面，也是启动之后的默认界面，可以看到下面这些信息。
                </div>
                <div style="width: 100%; height: 10px;" />
                <div class="content">2017/07/01 01:12</div>
              </div>
            <div class="lineslim"></div>
          </div>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="5" class="detaildiv tabheight">
          <p class="title is-6">新闻</p>
          <div class="" v-for="item in newsList">
            <div class="content" style="width: calc(100% - 20px);">贵州茅台吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦。这是Qtum量子链钱包的“概览”界面，也是启动之后的默认界面，可以看到下面这些信息。</div>
            <div style="width: 100%; height: 10px;" />
            <div class="detail" style="margin-bottom: 10px;">2017/07/01 01:12</div>
            <div class="lineslim"></div>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
export default {
  name: "Detail",
  data: () => ({
    tabindex:"5",
    transList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    commitList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    newsList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  }),
  methods: {
    // onTabClicked(index) {
    //   this.tabindex = index;
    // }
  }
};
</script>

<style lang="css">
.detaildiv {
  margin: 10px;
}
.price {
  color: #4450b2;
}
.line {
  width:100%;
  height:10px; 
  background:#e7e7e7;
}
.detail {
  font-size: 10px;
  color: #aaa;
}
.content {
  font-size: 10px;
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
  width:100%;
  height:1px; 
  background:#e7e7e7;
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
