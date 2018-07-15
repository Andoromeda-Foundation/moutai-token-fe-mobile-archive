<template functional>
<div class="card"  @click.native="buy">
  <div class="card-image" style="margin-top: 1rem">
    <figure class="image is-4by4">
       <img :src="props.coverFileDownloadUrl" alt="商品" class="item-img">
      <span class="img-font"><span style="font-size: 0.8rem">¥</span>{{!props.nextPrice?props.currentPrice:props.nextPrice}}</span>
      <!--<img src="https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg" alt="商品" class="item-img">-->
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4" style="font-size: 1rem;margin-bottom: 0.5rem">{{props.title}}</p>
        <div>
        <span class="subtitle">拥有者： {{!props.user?"":props.user.nickname}}</span>
        <span class="subtitle pickup" style="margin-top: 0.3rem">3 天后提货</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default{
      data(){
          return{

          }
      },
      methods:{
          buy(){
            alert("ddd")
          }
      }
  }
</script>
<style scoped>
.title {
  font-size: 1.5rem;
}
.subtitle {
  font-size: 0.8rem;
}
.card-content {
    padding: 0.5rem;
}
.pickup {
  color: #3EC170;
  float: right;
}
  .img-font{
    position: absolute;
    background: #3F51B5;
    color: #ffff;
    top: 0.7rem;
    right: 0.3rem;
    font-weight: 600;
    width: 4.5rem;
    align-contenet: center;
    marigin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
