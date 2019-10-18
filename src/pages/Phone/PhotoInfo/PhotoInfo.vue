<template>
  <div id="photoinfo">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time | dateFormat}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>
    <hr>
    <!--        缩略图区域 接口的原因-->
    <vue-preview :slides="smallPhoto"></vue-preview>

    <div class="content" v-html="photoInfo.content"></div>
    <!--        放置一个现成的 评论子组件 -->
    <Comment :id="id"/>
  </div>
</template>

<script>
  import {reqPhotoInfo,reqSmallPhoto} from '../../../api'
  import Comment from '../../../components/Comment/Comment.vue'

    export default {
      name: "PhotoInfo",
      data(){
        return{
          id:this.$route.params.id,//从路由得到的id
          photoInfo:{},//图片详情
          smallPhoto:[]//缩略图数组
        }
      },
      mounted() {
        this.getPhotoInfo();
        this.getSmallPhoto()
      },
      methods:{
        //得到图片详情
        async getPhotoInfo(){
          const result = await reqPhotoInfo(this.id)
          if(result.status===0){
            this.photoInfo = result.message[0]
          }
        },
        //得到缩略图数组
        async getSmallPhoto(){
          const result = await reqSmallPhoto(this.id)
          if(result.status===0){
            this.smallPhoto = result.message
            this.smallPhoto.forEach(item=>{
              item.msrc = item.src
              item.w = 600
              item.h = 400
            })
          }
        }
      },
      components:{
        Comment
      }
    }
</script>

<style scoped lang="scss">
  #photoinfo{
    padding: 3px;
    h3{
      color: #26a2ff;
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .content{
      font-size: 13px;
      line-height: 30px;
    }
    .thumbs{

    }
  }
</style>
