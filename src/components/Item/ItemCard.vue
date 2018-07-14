<template functional>
<div class="card">
  <div class="card-image" style="margin-top: 1rem">
    <figure class="image is-4by4">
       <img :src="props.coverFileDownloadUrl" alt="商品" class="item-img">
      <!--<img src="https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg" alt="商品" class="item-img">-->
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{props.title}}</p>
        <span class="subtitle">拥有者： {{props.user.nickname}}</span>
        <span class="subtitle pickup" >3 天后提货</span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.title {
  font-size: 1rem;
}
.subtitle {
  font-size: 0.5rem;
}
.card-content {
    padding: 0.5rem;
}
.pickup {
  color: #3EC170;
  float: right;
}
</style>
