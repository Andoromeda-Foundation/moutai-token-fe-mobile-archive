<!--<template>
  <div class="Home-view">
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
</script>-->

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
        <div class="join-view" v-if="nowIndex==tabsParam[0]">
            <UserCardList />
		</div>
        <div class="buy-sell-view" v-if="nowIndex==tabsParam[1]">
			<UserCardList />
		</div>
	</div>
    </section>

  </div>
</template>

<script>
import UserCardList from "../components/Item/UserCardList";

export default {
  name: "UserAssets",
  data() {
    return {
      tabsParam: ["全部", "转让中"],
      nowIndex: "全部"
    };
  },
  methods: {
    toggleTabs: function(e) {
      this.nowIndex = e.target.innerText;
      if (!this.tabsParam.includes(this.nowIndex)) this.nowIndex = "全部";
      if (this.nowIndex == "转让中") {
        //let usercardlist sort..
      }
      this.$forceUpdate();
    },
    getclass: function(item) {
      if (item == this.nowIndex) {
        return "is-active";
      } else {
        return " ";
      }
    }
  },
  components: {
    UserCardList
  }
};
</script>
