<template>
    <div id="goodsinfo">
      <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter">
        <div class="ball" v-show="ballFull" ref="ball"></div>
      </transition>
<!--      使用MUI中的cart.html-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!--封装好的轮播图子组件-->
            <Swiper :homelunbotu="lunbotu"/>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">{{goodInfo.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>￥{{goodInfo.market_price}} </del>
              &nbsp;&nbsp;
              销售价：<span class="now_price">￥{{goodInfo.sell_price}} </span>
            </p>
            <!--                    向子组件 传递了 一个方法-->
            <p>购买数量：<Numbox :max="goodInfo.stock_quantity" v-on:getNumboxCount="getNumboxCount"/></p>
            <p>
              <mt-button type="primary">立即购买</mt-button>
              <mt-button type="danger" @click="addCart">加入购物车</mt-button>
            </p>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{goodInfo.goods_no}} </p>
            <p>库存情况：{{goodInfo.stock_quantity}} </p>
            <p>上架时间：{{goodInfo.add_time | dateFormat}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" plain size="large" @click="goDesc(goodInfo.id)">图文介绍</mt-button>
          <mt-button type="danger" plain size="large" @click="goComment(goodInfo.id)">商品评论</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {reqGoodInfo,reqSmallPhoto} from '../../api'
  import Swiper from '../../components/Swiper/Swiper.vue'
  import Numbox from '../../components/GoodInfo-numbox/GoodInfo-numbox.vue'

    export default {
      name: "GoodInfo",
      data(){
        return{
          id:this.$route.params.id,
          lunbotu:[],//轮播图数组
          goodInfo:{},//商品的详情
          ballFull:false,//小球的显示
          count:1
        }
      },
      mounted(){
        this.getLunbotu()
        this.getGoodInfo()
      },
      methods:{
        async getLunbotu(){
          const result = await reqSmallPhoto(this.id)
          if(result.status===0){
            this.lunbotu = result.message
            this.lunbotu.forEach(item=>{
              item.img = item.src
            })
          }
        },
        //得到商品详情
        async getGoodInfo(){
          const result = await reqGoodInfo(this.id)
          if(result.status===0){
            this.goodInfo = result.message[0]
          }
        },
        //去商品详情页面
        goDesc(id){
          this.$router.push('/home/goodsdesc/'+id)
        },
        //去商品评论
        goComment(id){
          this.$router.push('/home/goodscomt/'+id)
        },
        //点击加入购物车按钮，1、小球运动 2、组成的goodinfo对象加入到store中
        addCart(){
          this.ballFull = !this.ballFull
          //存储在store
          var goodinfo = {
            id:this.id,
            count:this.count,
            price:this.goodInfo.sell_price,
            selected:true
          }
          this.$store.dispatch('addCart',goodinfo)
        },
        beforeEnter(el){
          el.style.transform = `translate(0,0)`
        },
        enter(el,done){
          el.offsetWidth;
          //获取小球位置
          const ballPosition = this.$refs.ball.getBoundingClientRect()
          //获取图标位置
          const countPosition = document.getElementById('count').getBoundingClientRect()

          const xDist = countPosition.left - ballPosition.left;
          const yDist = countPosition.top - ballPosition.top;

          el.style.transform = `translate(${xDist}px,${yDist}px)`
          el.style.transition = 'all .5s cubic-bezier(.4,-0.3,1,.68)'
          done();
        },
        afterEnter(el){
          this.ballFull = !this.ballFull
        },
        //获取numbox子组件的数据,传递给子组件的方法
        getNumboxCount(count){
          this.count = count
        }
      },
      components:{
        Swiper,
        Numbox
      }
    }
</script>

<style scoped lang="scss">
  #goodsinfo{
    background-color: #cccccc;
    overflow: hidden;//解决上边的背景颜色
    .now_price{
      color: red;
      font-size: 16px;
    }
    /*页脚的按钮*/
    .mui-card-footer{
      display: block;
      button{
        margin: 10px 0px;
      }
    }
    .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      z-index: 99;
      left: 40%;
      top: 390px;
    }
  }
</style>
