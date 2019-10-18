<template>
  <div id="cart">
    <div class="goods-list">
      <div class="mui-card" v-for="(item,index) in cartList" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
<!--            v-model绑定的为getters中的值-->
            <mt-switch v-model="getCartListSelected[item.id]" @change="selectedChange(item.id,getCartListSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
<!--                1、传递store中的数量给子组件/2、传递id给子组件好操作修改store中的值-->
                <CartNumbox :initCount="getCartListCount[item.id]" :id="item.id"/>
                <a href="#" @click="del(item.id,index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--        商品结算区域-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品<span class="red">{{totalCount}}</span>件，
              总价￥<span class="red">{{totalPrice}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import {reqCartList} from '../../api'
  import CartNumbox from '../../components/Cart-numbox/Cart-numbox.vue'

    export default {
      name: "Cart",
      data(){
        return{
          cartList:[]
        }
      },
      computed:{
        ...mapState(['cart']),
        ...mapGetters(['getCartListSelected','getCartListCount','totalCount','totalPrice'])
      },
      mounted(){
        this.getGoodsList()
      },
      methods:{
        //根据state中的cart中id值，请求得到的数据
        async getGoodsList(){
          var idArr = []
          this.cart.forEach(item => idArr.push(item.id))
          //如果购物车中没有数据，就不会发起请求
          if(idArr.length <= 0){
            return;
          }
          const result = await reqCartList(idArr.join(','))
          if(result.status===0){
            this.cartList = result.message
          }
        },
        //selected的值改变，对应的state和localStorage中的值要改变
        selectedChange(id,value){
          var isSelect = {id:id,selected:value}
          this.$store.dispatch('updateCartListSelected',isSelect)
        },
        del(id,index){
          this.cartList.splice(index,1)//当前列表中的删除
          this.$store.dispatch('del',id)
        }
      },
      components:{
        CartNumbox
      }
    }
</script>

<style scoped lang="scss">
  #cart{
    background-color: #cccccc;
    overflow: hidden;
    .goods-list{
      .mui-card-content-inner{
        display: flex;
        justify-content: space-between;
        img{
          width: 60px;
          height: 60px;
        }
        h1{
          font-size: 13px;
        }
        .info{
          .price{
            color: red;
          }
        }
      }
    }
    .jiesuan{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red{
        color: red;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
