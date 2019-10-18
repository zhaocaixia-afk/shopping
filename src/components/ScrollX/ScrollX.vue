<template>
  <div class="wrapper">
    <ul class="content" ref="categoryUl">
      <li @click="changeCategory(category.id)" :class="category.id===categoryId?'active':''" v-for="(category,index) in photoCategoryList" :key="index">
        {{category.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
    export default {
      name: "ScrollX",
      data(){
        return{
          categoryId:0
        }
      },
      props:{
        photoCategoryList:Array,
        getPhotoList:Function
      },
      mounted() {
        new BScorll('.wrapper',{
          scrollX:true,
          click:true
        })
      },
      methods:{
        changeCategory(id){
          //切换当前选中样式
          this.categoryId = id
          //触发父组件中对应的函数，并传递id值
          this.$emit('getPhotoList',id)
        }
      }
    }
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .wrapper{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .content{
        width: 1200px;
        li{
          display: inline-block;
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          /*border: 1px solid #2ac845;*/
        }
        .active{
          color: blue;
        }
      }
    }
  }
</style>
