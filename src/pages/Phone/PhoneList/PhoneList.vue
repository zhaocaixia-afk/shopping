<template>
    <div>
      <ScrollX :photoCategoryList="photoCategoryList" v-on:getPhotoList="getPhotoList"/>

      <ul class="photo-list">
        <router-link :to="'/home/photoinfo/'+photo.id" tag="li" v-for="(photo,index) in photoList" :key="index">
          <img :src="photo.img_url">
          <div class="info">
            <h1 class="info-title">{{photo.title}}</h1>
            <div class="info-body">{{photo.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
  import ScrollX from '../../../components/ScrollX/ScrollX.vue'
  import {reqPhotoCategoryList,reqPhotoList} from '../../../api'

    export default {
      name: "PhoneList",
      data(){
        return{
          photoCategoryList:[],//图片分类列表
          photoList:[],//图片列表
        }
      },
      mounted(){
        this.getCategoryList()
        this.getPhotoList(0)
      },
      methods:{
        //得到图片的分类列表
        async getCategoryList(){
          const result = await reqPhotoCategoryList();
          if(result.status === 0){
            this.photoCategoryList = result.message
            this.photoCategoryList.unshift({id:0,title:'全部'})
          }
        },
        //得到分类对应的图片列表
        async getPhotoList(cateId){
          //父组件，使用子组件的cateId
          const res = await reqPhotoList(cateId);
          if(res.status===0){
            this.photoList = res.message
          }
        }
      },
      components:{
        ScrollX
      }
    }
</script>

<style scoped lang="scss">
  .photo-list{
    margin: 0px;
    padding: 10px 10px 0px 10px;
    li{
      background-color: #cccccc;
      text-align: center;
      list-style: none;
      margin-bottom: 10px;
      box-shadow: 0 0 6px #999999;
      position: relative;
      img{
        width: 100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0px;
        background-color: rgba(0,0,0,0.6);
        max-height: 84px;
        .info-title{
          font-size: 14px;
        }
        .info-body{
          font-size: 13px;
        }
      }
    }
  }
</style>
