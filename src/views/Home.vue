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
        <router-link :to="{name: 'MoreList'}">查看更多</router-link>
        </mt-button>
    </mt-header>
    <ItemList />
    <GeneralTabBar :menus="menus">
    </GeneralTabBar>
  </div>
</template>

<script>
import ItemList from "../components/Item/ItemList";
import Banner from "../components/Home/Banner";
import GeneralTabBar from "../components/GeneralTabBar";


export default {
  name: "Home",
  components: {
    ItemList,
    GeneralTabBar,
    Banner
  },
  data: () => ({
    menus: [
      {
        name: '主页',
        location: '/',
        logo: "/assets/images/home.png"
      },
      {
        name: '资产公告',
        location: '',
        logo: "/assets/images/message.png"
      },
      {
        name: '路线图',
        location: '',
        logo: "/assets/images/line.png"
      },
      {
        name: '客服',
        location: '',
        logo: "/assets/images/customer.png"
      },
      {
        name: '我的',
        location: '/User',
        logo: "/assets/images/me.png"
      },
    ]
  })
};
</script>
