<template>
  <div class="Detail-view">
          <img src="https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg" width="100%" />
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
  </div>
</template>
  <script>
export default {
  name: "Transfer",
  data: () => ({
    tabindex: "5"
  })
};
</script>
