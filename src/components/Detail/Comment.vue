<template>
    <div id="comment-list">
        <mt-cell class="cell" title="讨论区">
            <mt-button class="button" type="default" size="small">发表评论</mt-button>
        </mt-cell>

        <div class="comment" v-for="item in comments" :key="item.username">
              <div>
                <img :src="item.avatar" style="width: 30px; height: 30px; border-radius:50%;"/>
              </div>
              <div class="commit">
                <div class="content"> {{item.username}}</div>
                <div style="width: 100%; height: 10px;" />
                <div class="content" style="width: calc(100% - 20px);">
                  {{item.content}}
                </div>
                <div style="width: 100%; height: 10px;" />
                <div class="content"> {{item.datetime}} </div>
              </div>
            <div class="lineslim"></div>
          </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CommentComponent",
  props: ["comments", "goodId"],
  computed: {
    ...mapState({
      // ?? state.token is a object that have `token` property ??
      // 用户的 token
      token: state => state.token.token
    })
  },
  methods: {
    sendComment() {
      // 获取商品 ID 和 用户的 token
      const {goodId, token} = this;

      // 代码填空，发生请求 etc.
    }
  }
};
</script>


<style lang="css" scoped>
.detaildiv {
  margin: 10px;
}
.price {
  color: #4450b2;
}
.line {
  width: 100%;
  height: 10px;
  background: #e7e7e7;
}
.detail {
  font-size: 14px;
  color: #aaa;
}
.content {
  font-size: 14px;
  color: #000;
}
.field {
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
.button {
  margin-left: 5px;
  margin-right: 5px;
}

/**
tab3
**/
.lineslim {
  width: 100%;
  height: 1px;
  background: #e7e7e7;
  margin-bottom: 10px;
}
.columns {
  height: 35px;
}
.cell {
  width: -webkit-calc(100% - 20px);
  margin-bottom: 20px;
}
.tabheight {
  margin-bottom: 50px;
}

/**
tab4
**/
.commit {
  margin-left: 40px;
  margin-top: -30px;
  margin-bottom: 10px;
}

/**
tab5
**/
</style>