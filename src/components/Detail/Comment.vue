<template>
    <div id="comment-list">
        <mt-cell class="cell" title="讨论区">
            <mt-button class="button" type="default" size="small" @click="sendComment()">发表评论</mt-button>
        </mt-cell>

        <div class="comment" v-for="item in comments" :key="item.username">
              <div>
                <img :src="item.avatar" style="width: 30px; height: 30px; border-radius:50%;"/>
              </div>
              <div class="commit">
                <div class="content"> {{item.user.nickname}}</div>
                <div style="width: 100%; height: 10px;" />
                <div class="content" style="width: calc(100% - 20px);">
                  {{item.content}}
                </div>
                <div style="width: 100%; height: 10px;" />
                <div class="content"> {{item.updatedAt}} </div>
              </div>
            <div class="lineslim"></div>
          </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast, MessageBox } from "mint-ui";
import config from "../../api/service";

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
      if (this.token === "") {
        MessageBox("提示", "请先登录");
        this.$router.push("/Login");
        return;
      }
      MessageBox.prompt('请输入你的评论：').then(({ value, action }) => {
        if(action == "confirm") {
          console.log(action);
          const formData = {'content':value};
          this.$http.post(`${config.baseUrl.production}/spirits/${this.$route.params.id}/message`, formData, {
            headers: { token: this.token }
          })
            .then((response) => {
              const res = response.body;
              Toast("评论成功，刷新页面即可看到");
            });
        }
      });
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