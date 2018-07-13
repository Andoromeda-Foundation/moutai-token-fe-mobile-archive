<template>
  <div class="Detail-view">

    <section>
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

  </div>
</template>

<script>
export default {
  name: "Detail"
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
</style>
