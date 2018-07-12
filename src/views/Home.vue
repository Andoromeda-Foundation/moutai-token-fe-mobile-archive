<template>
  <div class="Home-view">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            每一瓶酒，都在成长
          </h1>
          <h2 class="subtitle">
            认购、存托和交易您的白酒，0手续费。
          </h2>
        </div>
      </div>
    </section>
    <ItemList />
  </div>
</template>

<script>
import ItemList from "../components/Item/ItemList";
export default {
  name: "Home",
  components: {
    ItemList
  }
};
</script>
