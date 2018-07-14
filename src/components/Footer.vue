<template>
  <div class="footer">
    <mt-tabbar v-model="selected"
    :fixed="true">
      <mt-tab-item id="主页">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="资产公告">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        资产公告
      </mt-tab-item>
      <mt-tab-item id="路线图">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        路线图
      </mt-tab-item>
      <mt-tab-item id="客服">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        客服
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="https://i.loli.net/2018/07/13/5b48270e7ccc7.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "NavigateTabBar",
  data: () => ({
    selected: 0
  })
};
</script>
