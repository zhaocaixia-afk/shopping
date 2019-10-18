<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" readonly ref="numbox" :value="initCount" @change="cartCountChange"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../comments/mui/js/mui.js'
    export default {
      name: "Cart-numbox",
      props:{
        initCount:Number,
        id:Number//传过来的id，好修改store中的数据
      },
      mounted(){
        mui('.mui-numbox').numbox()
      },
      methods:{
        cartCountChange(){
          const idCount = {id:this.id,count:this.$refs.numbox.value}
          this.$store.dispatch('updateCartCount',idCount)
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
