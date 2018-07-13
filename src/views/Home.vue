<template>
  <div class="Home-view">
    <Banner
    title="每一瓶酒，都在成长"
    subtitle="认购、存托和交易您的白酒。" 
    desc="0手续费。" />
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
