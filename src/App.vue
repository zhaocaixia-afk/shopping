<template>
  <div id="app">
    <Header/>
<!--    路由的切换的动画-->
    <transition>
      <router-view></router-view>
    </transition>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import Header from './components/Header/Header.vue'

export default {
  name: 'App',
  components:{
    FooterGuide,
    Header
  }
}
</script>

<style scoped lang="scss">
#app{
  padding-top: 40px;
  padding-bottom: 50px;
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
}
</style>
