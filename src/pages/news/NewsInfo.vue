<template>
  <div id="newsinfo">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="sub-title">
      <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
    <Comment :id="id"/>
  </div>
</template>

<script>
  import {reqNewsInfo} from '../../api'
  import Comment from '../../components/Comment/Comment.vue'

    export default {
      name: "NewsInfo",
      data(){
        return{
          id:this.$route.params.id,//从NewsList路由传过来的id
          newsInfo:{},//获取到的newsInfo
        }
      },
      async mounted(){
        const result = await reqNewsInfo(this.id)
        if(result.status === 0){
          this.newsInfo = result.message[0]
        }
      },
      components:{
        Comment
      }
    }
</script>

<style scoped lang="scss">
  #newsinfo{
    padding: 0 5px;
    .title{
      font-size: 15px;
      color: red;
      text-align: center;
      height: 30px;
      line-height: 30px;
    }
    .sub-title{
      display: flex;
      justify-content: space-between;
      color: deepskyblue;
      font-size: 13px;
    }
    .content{

    }
  }

</style>
