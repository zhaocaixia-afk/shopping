<template>
  <div id="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea cols="2" rows="3" placeholder="请输入要BB的内容(最多BB120个字)"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="list-container">
      <div class="info" v-for="(comment,index) in comments" :key="index">
        <div class="info-title">
          <span>第{{index+1}}楼</span>
          &nbsp;&nbsp;
          <span>用户：{{comment.user_name}}</span>
          &nbsp;&nbsp;
          <span>发表时间：{{comment.add_time | dateFormat}}</span>
        </div>
        <div class="info-content">
          {{comment.content==='undefined'||comment.content===""?'此用户没有输入评论':comment.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {reqComments} from '../../api'
  export default {
    name: "comment",
    data(){
      return{
        pageindex:1,//评论的页数，默认为第一页
        comments:[]
      }
    },
    props:{
      id:String
    },
    mounted(){
      this.getComments()
    },
    methods:{
      async getComments(){
        const {pageindex} = this
        const result = await reqComments(parseInt(this.id),{pageindex})
        if(result.status===0){
          this.comments = this.comments.concat(result.message)
        }
      },
      getMore(){
        this.pageindex++
        this.getComments()
      }
    }
  }
</script>

<style scoped lang="scss">
  #comment{
    h3{
      font-size: 20px;
    }
    textarea{
      font-size: 15px;
      resize: none;
      margin-bottom: 5px;
    }
    .mint-button{
      margin-bottom: 5px;
    }
    .list-container{
      .info{
        line-height: 30px;
        .info-title{
          height: 30px;
          background-color: #cccccc;
          font-size: 13px;
        }
        .info-content{
          height: 30px;
          text-indent: 20px;
          font-size: 13px;
        }
      }
    }
  }
</style>
