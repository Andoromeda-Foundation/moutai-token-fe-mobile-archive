<template>
  <div class="Detail-view">

    <div class="tabs is-small">
      <ul>
        <li @click="onTabClicked(0)"><a>商品</a></li>
        <li @click="onTabClicked(1)"><a>价格趋势</a></li>
        <li @click="onTabClicked(2)"><a>交易历史</a></li>
        <li @click="onTabClicked(3)"><a>讨论区</a></li>
        <li @click="onTabClicked(4)"><a>新闻</a></li>
      </ul>
    </div>

    <section v-show="tabindex === 0">
      <img src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" />
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
      <div class="field is-grouped">
        <a class="button">主页</a>
        <a class="button">客服</a>
        <a class="button is-link is-fullwidth">立即认购</a>
      </div>
    </section>

    <section v-show="tabindex === 1" class="detaildiv">
      <p class="title is-6">价格趋势</p>
    </section>

    <section v-show="tabindex === 2" class="detaildiv">
      <p class="title is-6">交易历史</p>
      <div class="" v-for="item in transList">
        <div class="columns is-mobile">
          <div class="column is-2-mobile">
            <img src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" style="width: 30px; height: 30px;"/>
          </div>
          <div class="column is-5-mobile content">飞天茅台</div>
          <div class="column is-2-mobile content">转让</div>
          <div class="column is-1-mobile content">¥2100.00</div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-2-mobile content">XXX02</div>
          <div class="column is-1-mobile content">→</div>
          <div class="column is-3-mobile content">白酒银行</div>
          <div class="column is-4-mobile content">2017/07/01 07:09</div>
        </div>
        <div class="lineslim"></div>
      </div>
    </section>

    <section v-show="tabindex === 3" class="detaildiv">
      <div class="columns is-mobile">
        <div class="column is-9-mobile">
          <p class="title is-6">讨论区</p>
        </div>
        <div class="column is-3-mobile content">发表评论</div>
      </div>
      <div class="" v-for="item in commitList">
          <div class="column is-2-mobile">
            <img src="https://wx4.sinaimg.cn/mw690/006gTYrfgy1ft6drwphf3j311a0l3e06.jpg" style="width: 30px; height: 30px; border-radius:50%;"/>
          </div>
          <div class="commit">
            <div class="content">茅台</div>
            <div class="content">这是Qtum量子链钱包的“概览”界面，也是启动之后的默认界面，可以看到下面这些信息。</div>
            <div class="content">2017/07/01 01:12</div>
          </div>
        <div class="lineslim"></div>
      </div>
    </section>

    <section v-show="tabindex === 4" class="detaildiv">
      <p class="title is-6">新闻</p>
      <div class="" v-for="item in newsList">
        <div class="content">贵州茅台吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦。这是Qtum量子链钱包的“概览”界面，也是启动之后的默认界面，可以看到下面这些信息。</div>
        <div class="detail">2017/07/01 01:12</div>
        <div class="lineslim"></div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Detail",
  data: () => ({
    tabindex:3,
    transList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    commitList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    newsList:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  }),
  methods: {
    onTabClicked(index) {
      this.tabindex = index;
    }
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

/**
tab4
**/
.commit {
  margin-left: 60px;
  margin-top: -45px;
  margin-bottom: 10px;
}

/**
tab5
**/
</style>
