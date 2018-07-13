<template>
  <div id="app">
    <Header />
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <router-view/>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
    </mt-tab-container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      active: "tab-container1"
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
