<template>
  <div class="tab-bar">
    <mt-tabbar v-model="selected"
    :fixed="true">
      <mt-tab-item v-for="menu in menus" :key="menu.name" id="menu.name" @click.native="menuTab(menu.location)">
        <img slot="icon" :src="menu.logo">
        {{menu.name}}
      </mt-tab-item>
      <slot></slot>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GeneralNavigateTabBar",
  props: ["menus"],
  data: () => ({
    selected: 0
  }),
  computed: {
    ...mapGetters({
      token: "getToken"
    })
  },
  methods: {
    menuTab(name) {
      console.log(name);
      if (name.indexOf("/User") > -1) {
        if (!this.token) {
          Toast("请先登录");
          this.$router.push("/Login");
          return;
        } else {
          this.$router.push(name);
        }
      } else {
        this.$router.push(name);
      }
    }
  }
};
</script>
