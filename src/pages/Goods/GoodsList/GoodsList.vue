<template>
  <div id="goodslist">
    <ul>
<!--      @click使用编程式导航-->
      <li @click="goGoodDetail(good.id)" v-for="(good,index) in goodsList" :key="index">
        <img :src="good.img_url">
        <h1>{{good.title}}</h1>
        <div class="info">
          <p class="sell">
            <span class="new">￥{{good.sell_price}}</span>
            <span class="old">￥{{good.market_price}}</span></p>
          <p class="title">
            <span>热卖中</span>
            <span>剩{{good.stock_quantity}}件</span>
          </p>
        </div>
      </li>
    </ul>
    <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {reqGoodsList} from '../../../api'
    export default {
      name: "GoodsList",
      data(){
        return{
          pageindex:1,
          goodsList:[]
        }
      },
      mounted(){
        this.getGoodsList()
      },
      methods:{
        //得到商品列表
        async getGoodsList(){
          const {pageindex} = this
          const result = await reqGoodsList({pageindex})
          if(result.status===0){
            this.goodsList = this.goodsList.concat(result.message)
          }
        },
        //加载更多
        getMore(){
          this.pageindex++
          this.getGoodsList()
        },
        //使用编程式导航
        goGoodDetail(id){
          this.$router.push('/home/goodsinfo/'+id)
        }
      }
    }
</script>

<style scoped lang="scss">
  #goodslist{
    padding: 5px;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style: none;
      padding: 0px;
      margin: 0px;
      li{
        width: 49%;
        height: 200px;
        margin-bottom: 6px;
        border: 1px solid #cccccc;
        box-shadow: 0 0 3px #999999;
        img{
          width: 100%;
          height: 49%;
        }
        h1{
          font-size: 15px;
          max-height: 30px;
          overflow: hidden;
        }
        /*下面的灰色部分*/
        .info{
          background-color: #eceeeb;
          margin:3px;
          p{
            margin: 0px;
            padding: 3px;
          }
          .sell{
            .new{
              font-size: 15px;
              color: red;
              font-weight: bold;
            }
            .old{
              font-size: 12px;
              text-decoration: line-through;
              color: #8f8f94;
            }
          }
          .title{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
          }
        }
      }
    }
  }
</style>
