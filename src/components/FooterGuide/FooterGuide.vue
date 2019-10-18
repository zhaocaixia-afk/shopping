<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item-my" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item-my" to="/message">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item-my" to="/cart">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="count">{{countAll}}</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item-my" to="/search">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "FooterGuide",
      computed:{
        ...mapGetters(['countAll'])
      }
    }
</script>

<style scoped>

</style>
