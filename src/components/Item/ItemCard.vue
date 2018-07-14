<template functional>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by4">
      <img :src="props.img" alt="商品" class="item-img">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <!-- <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div> -->
      <div class="media-content">
        <p class="title is-4">{{props.name}}</p>
        <span class="subtitle">拥有者： {{props.owner}}</span>
        <span class="subtitle pickup" >3 天后提货</span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
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
