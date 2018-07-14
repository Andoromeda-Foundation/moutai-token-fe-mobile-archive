<template>
  <div class="footer">
    <mt-tabbar v-model="selected"
    :fixed="true">
      <mt-tab-item id="主页" @click.native="menuTab('Home')">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="资产公告"  @click.native="menuTab('')">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        资产公告
      </mt-tab-item>
      <mt-tab-item id="路线图" @click.native="menuTab('')">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        路线图
      </mt-tab-item>
      <mt-tab-item id="客服" @click.native="menuTab('')">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        客服
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="menuTab('User')">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigateTabBar",
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
      if (!this.token) {
        alert("请先登录");
        this.$router.push("/");
        return;
      }
      this.$router.push(name);
    }
  }
};
</script>
