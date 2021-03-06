import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound";
import Login from "./views/Login.vue";
import Regitered from "./views/Registered.vue";
import Detail from "./views/Detail.vue";
import User from "./views/User.vue";
import UserAssets from "./views/UserAssets.vue";
import Transfer from "./views/Transfer.vue";
import UserTransferList from "./views/UserTransferList.vue";
import UserWallet from "./views/UserWallet.vue";
import Withdraw from "./views/Withdraw.vue";
import itemList from "./components/Item/ItemList.vue"
import MoreList from "./views/MoreList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
  /*  {
      path: "/CustomerService",
      name: "CustomerService",
      component: Home
    },
    {
      path: "/AssetAnnouncement",
      name: "AssetAnnouncement",
      component: Home
    },
    {
      path: "/Roadmap",
      name: "Roadmap",
      component: Home
    },*/
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Regitered",
      name: "Registered",
      component: Regitered
    },
    {
      path: "/Detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/User",
      name: "User",
      component: User
    },
    {
      path: "/UserAssets",
      name: "UserAssets",
      component: UserAssets
    },
    {
      path: '/Transfer/:id',
      name: "Transfer",
      component: Transfer
    },
    {
      path: "/UserTransferList",
      name: "UserTransferList",
      component: UserTransferList
    },
    {
      path: "/UserWallet",
      name: "UserWallet",
      component: UserWallet
    },
    {
      path: "/Withdraw",
      name: "Withdraw",
      component: Withdraw
    },
      {
        path: "/itemList",
          name: "itemList",
          component: itemList
      },
    {
      path: "/Withdraw",
      name: "Withdraw",
      component: Withdraw
    },
    {
      path: "/MoreList",
      name: "MoreList",
      component: MoreList
    }
  ]
});
