<template>
  <div id="newslist">
    <!--        使用 MUI 的 media-list.html -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {reqNewsList} from '../../api'
    export default {
      name: "newsList",
      data(){
        return{
          newslist:[]//新闻列表
        }
      },
      async mounted(){
        const result = await reqNewsList()
        if(result.status === 0){
          this.newslist = result.message
        }
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/stylus">
  /*标题样式*/
  .mui-table-view .mui-media-body{
    font-size: 14px;
    font-weight: bold;
  }
  /*时间和点击次数样式*/
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: deepskyblue;
  }
</style>
