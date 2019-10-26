<template>
<!--  使用了mint-ui-->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(lunbo,index) in homelunbotu" :key="index">
        <img :src="lunbo.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
      name: "Swiper",
      props:{
        homelunbotu:Array
      }
    }
</script>

<style scoped lang="scss">
.mint-swipe{
  height: 200px;
}
  img{
    width: 100%;
    height: 100%;
  }
</style>
