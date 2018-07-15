<template>
  <div class="User-Assets-view">
    <section>
      <div>
      	<div class="tabs is-centered is-fullwidth">
          <ul id="myTab">
    			  <li 
        			v-for="item in tabsParam" :key="item"
                    :class="getclass(item)"
        			@click="toggleTabs">
					    <a data-toggle="tab">
            			{{item}}
        			</a>
				    </li>
			    </ul>
        </div>
        <div v-for="item in list" :key="item" class="transferlist">
            <mt-cell :title="item.name" style="border-style:outset;border-width:1px;">
              <span slot="icon">
                {{getarrow(item.type)}}
                <img :src="item.coverFileDownloadUrl" width="36" height="36">
              </span>
              <span style="margin-left:30px;" class="smallgreen">{{item.type}}</span>
              <span style="margin-left:50px;" class="price">¥{{item.price}}</span>
            </mt-cell>
            <!-- <div class="columns is-mobile">
                <div class="column is-one-third">
                    <span class="content" style="padding-left:20px;">XXX02</span>
                </div>
                <div class="column is-one-quarter">
                    <span class="content" style="padding-left:5px;">白酒银行</span>
                </div>
                <div class="column is-two-fifths">
                    <span class="detail">12天12时00分00秒</span>
                </div>
            </div> -->
		    </div>
	    </div>
    </section>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import config from "../api/service.js"
export default {
  name: "UserTransferList",
  data() {
    return {
      tabsParam: ["全部", "买入", "卖出"],
      nowIndex: "全部",
      alllist: [
        // {
        //   img:
        //     "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
        //   name: "2012飞天茅台",
        //   type: "买入",
        //   money: 10000
        // },
        // {
        //   img:
        //     "https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg",
        //   name: "2013飞天茅台",
        //   type: "卖出",
        //   money: 20000
        // }
      ],
      list:[]
    };
  },
    computed:{
        ...mapGetters({
            token: "getToken"
        })
    },
  methods: {
    toggleTabs: function(e) {
      this.nowIndex = e.target.innerText;
      if (!this.tabsParam.includes(this.nowIndex)) this.nowIndex = "全部";
      if (this.nowIndex == "买入") {
        this.list = [];
        for(var item in this.alllist){
          if(this.alllist[item].type == "买入"){
            this.list.push(this.alllist[item]);
          }
        }
      }else if (this.nowIndex == "卖出") {
        this.list = [];
        for(var item in this.alllist){
          if(this.alllist[item].type == "卖出"){
            this.list.push(this.alllist[item]);
          }
        }
      }else{
        this.list = this.alllist;
      }
      this.$forceUpdate();
    },
    getclass: function(item) {
      if (item == this.nowIndex) {
        return "is-active";
      } else {
        return " ";
      }
    },
    getarrow: function(type) {
      if (type == "买入") {
        return "⬆";
      } else if (type == "卖出"){
        return "⬇";
      } else {
        return "*";
      }
    }
  },
  created() {
      let thiz = this;
      /* this.$http.get('http://47.75.74.227:8080/api//user/trades',
       {headers: {'token': 'eb8f7736127b3af7ab12558a74cc5c50'}})*/
      this.$http.get(`${config.baseUrl.production}/user/trades` ,
          {headers: {'token': thiz.token}})
    .then(response => {
      console.log(response.body)
      var data = response.body.result || [];
      for(var item in data){
        data[item].coverFileDownloadUrl = `${config.baseUrl.imageUrl}`+ data[item].spirit.coverFileDownloadUrl;
        data[item].name = data[item].spirit.brand;
        data[item].price = data[item].spirit.currentPrice;
        if(data[item].isCurrentUserBuy){
          data[item].type = "买入"
        }else if(data[item].isCurrentUserSell){
          data[item].type = "卖出"
        }else{
          data[item].type = "?"
        }
      }
      this.alllist = data;
      this.list = data;
    }, response => {
      // error callback
    });
  }
};
</script>
<style lang="css" scoped>
.detail {
  font-size: 10px;
  color: #aaa;
}
.smallgreen {
  font-size: 13px;
  color: #3EC170;
}
.content {
  font-size: 10px;
  color: #000;
}
.price{
  font-size: 13px;
  color: #3F51B5
}
</style>
