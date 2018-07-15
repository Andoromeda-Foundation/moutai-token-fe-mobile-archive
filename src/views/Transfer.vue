<template>
  <div class="Detail-view">
          <img src="https://ws2.sinaimg.cn/large/006tKfTcgy1ft7ak20qkoj30go0f2aag.jpg" width="100%" />
          <div class="detaildiv">
            <p class="title is-6 price">¥ {{currentPrice}}</p>
            <div class="columns is-mobile is-gapless is-multiline">
                <div class="column is-four-fifths">
                    <span class="title is-6">{{title}}</span>
                </div>
                <div class="column is-one-fifth" align="right">
                    <span class="tag is-rounded share">
                        分享
                    </span>
                </div>
            </div>
            <div class="columns is-mobile is-gapless is-multiline">
                <div class="column is-two-fifths">
                    <span class="detail">拥有者：{{owner}}</span>
                </div>
                <div class="column is-three-fifths">
                    <span class="detail">提货时间：{{freezeTo}}</span>
                </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="detaildiv">
            <p><a class="detail">品牌：</a><a class="content">{{brand}}</a></p>
            <p><a class="detail">年份：</a><a class="content">{{time}}</a></p>
            <p><a class="detail">度数：</a><a class="content">{{degree}}</a></p>
            <p><a class="detail">规格：</a><a class="content">{{specification}}</a></p>
          </div>
          <div class="line"></div>
              <mt-cell title="价格¥：" to="UserAssets" is-link>{{transferPrice}}
              </mt-cell>
          <div class="line"></div>
         <!-- <div style="padding-top:10px;padding-right:10px;">
            <a class="button is-fullwidth is-rounded content"
             style="background-color:#3F51B5">确认转账</a>
          </div>-->
      <mt-button class="btn" @click.native="TransferTo">确认转让</mt-button>
  </div>
</template>
  <script>
      import {Toast,MessageBox} from "mint-ui";
      import {mapGetters} from  "vuex";
      import config from "../api/service"
export default {
  name: "Transfer",
    components:{
        Toast,
        MessageBox
    },
  data: () => ({
    tabindex: "5",
    id: 0,
    title:"",
    currentPrice:0,
    owner:"",
    freezeTo:0,
    brand: "",
    time:0,
    degree:0,
    specification:0,
      transferPrice:''
  }),

  created(){
    const arr = window.location.href.split('/');
    this.id = arr[arr.length-1]
    var thiz = this;
    this.$http.get(`${config.baseUrl.production}/spirits/`+this.id,
      {headers: {'token': thiz.token}})
    .then(response => {
        const results = response.body.result;
        this.title = results.title;
        this.currentPrice = results.currentPrice;
        this.owner = results.user.nickname;
        this.freezeTo = results.freezeTo.slice(0,10);
        this.brand = results.brand;
        this.time = results.time;
        this.degree = results.degree;
        this.specification = results.specification;
        this.transferPrice = results.nextPrice;
        console.log(response.body)
    }, response => {
      // error callback
    });
  },
    computed:{
        ...mapGetters({
            token: "getToken"
        })
    },
    methods:{
        TransferTo(){
            let thiz= this;
            MessageBox.prompt("转让价(¥)").then(({value,action}) =>{
                if(!value||isNaN(value)){
                    Toast("请输入数字")
                    return
                }
                this.transferPrice = value;
               //转让
                this.$ajax({
                    method:"patch",
                    url: `${config.baseUrl.production}/spirits/`+thiz.id,
                    headers:{token: thiz.token},
                    data:{
                        status: "sale",
                        nextPrice: value
                    }
                }).then(res =>{
                    console.error(res)
                    if(res.data.statusCode == 200){
                        MessageBox("提示","转让成功！")
                    }else {
                        if(res.data.message =="Unauthorized"){
                            MessageBox("提示","请重新登录！")
                            this.$router.push("/");
                            return;
                        }
                        MessageBox("提示","转让失败！")
                    }

                }).catch(err =>{

                })
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
  width:100%;
  height:10px; 
  background:#e7e7e7;
}
.detail {
  font-size: 10px;
  color: #aaa;
}
.content {
  font-size: 10px;
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
.nameleft{
  margin-left: 5px;
  margin-right: 5px;
}
.nameright{
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
.share {
  margin-top: 15px;
}

/**
tab3
**/
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

.btn {
    width: 100%;
    color: white;
    background-color: #3F51B5;
    margin-top: 20px;
    border-radius: 2.5rem;
}
</style>
