<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChange"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
  import mui from '../../comments/mui/js/mui.js'
    export default {
      name: "GoodInfo-numbox",
      props:{
        max:Number,
        getNumboxCount:Function
      },
      mounted() {
        mui('.mui-numbox').numbox();
      },
      methods:{
        countChange(){
          //读取change的值，使用this.$refs.numbox.value
          //每一次改变都需要将值传递给父组件
          this.$emit('getNumboxCount',parseInt(this.$refs.numbox.value))
        }
      },
      watch:{
        //监听max值，js确定最大数量
        'max':function (value) {
          mui('.mui-numbox').numbox().setOption('max',value)
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
