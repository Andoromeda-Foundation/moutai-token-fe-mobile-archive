<template>
  <div class="Home-view">
    <Banner
    title="每一瓶酒，都在成长"
    subtitle="认购、存托和交易您的白酒。" 
    desc="0手续费。" />
    <mt-header style=" background: #FFFFFF; color: #333;" >
      <mt-button slot="left">
       最近交易
        </mt-button>
      <mt-button slot="right">
<<<<<<< HEAD
        <router-link :to="{name: 'itemList'}">查看更多</router-link>
=======
        <router-link :to="{name: 'MoreList'}">查看更多</router-link>
>>>>>>> 59158f7dfe29cdb69aab3090ef5f2571cadfb827
        </mt-button>
    </mt-header>
    <ItemList />
  </div>
</template>

<script>
import ItemList from "../components/Item/ItemList";
import Banner from "../components/Home/Banner";

export default {
  name: "Home",
  components: {
    ItemList,
    Banner
  }
};
</script>
