<template>
  <div id="goodsdesc">
    <h1>{{goodDesc.title}}</h1>
    <hr>
    <div class="conten" v-html="goodDesc.content"></div>
  </div>
</template>

<script>
  import {reqGoodDesc} from '../../api'
    export default {
        name: "GoodDesc",
      data(){
        return{
          id:this.$route.params.id,
          goodDesc:{}
        }
      },
      mounted() {
        this.getGoodDesc()
      },
      methods:{
        async getGoodDesc(){
          const result = await reqGoodDesc(this.id)
          if(result.status===0){
            this.goodDesc = result.message[0]
          }
        }
      }
    }
</script>

<style lang="scss">
  #goodsdesc{
    h1{
      font-size: 16px;
      color: #226aff;
      text-align: center;
      margin: 15px 0px;
    }
    .content{
      img{
        width: 100%;
      }
    }
  }
</style>
