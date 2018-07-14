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
                <img :src="item.img" width="36" height="36">
              </span>
              <span style="margin-left:30px;" class="smallgreen">{{item.type}}</span>
              <span style="margin-left:30px;" class="price">{{item.money}}</span>
            </mt-cell>
            <div class="columns is-mobile">
                <div class="column is-one-third">
                    <span class="content" style="padding-left:20px;">XXX02</span>
                </div>
                <div class="column is-one-quarter">
                    <span class="content" style="padding-left:5px;">白酒银行</span>
                </div>
                <div class="column is-two-fifths">
                    <span class="detail">12天12时00分00秒</span>
                </div>
            </div>
		    </div>
	    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "UserTransferList",
  data() {
    return {
      tabsParam: ["全部", "买入", "卖出"],
      nowIndex: "全部",
      list: [
        {
          img:
            "https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg",
          name: "2012飞天茅台",
          type: "买入",
          money: 10000
        },
        {
          img:
            "https://ws3.sinaimg.cn/large/006tKfTcgy1ft7ajz8j0tj306404lq2s.jpg",
          name: "2013飞天茅台",
          type: "卖出",
          money: 20000
        }
      ]
    };
  },
  methods: {
    toggleTabs: function(e) {
      this.nowIndex = e.target.innerText;
      if (!this.tabsParam.includes(this.nowIndex)) this.nowIndex = "全部";
      if (this.nowIndex == "买入") {
        //let it sort..
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
      } else {
        return "⬇";
      }
    }
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
