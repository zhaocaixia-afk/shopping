<template>
    <div>
      <mt-header fixed title="固定在顶部">
        <span slot="left" v-show="flag" @click="goBack">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
</template>

<script>
    export default {
      name: "Header",
      data(){
        return{
          flag:false
        }
      },
      created(){
        this.flag = "$route.path"=='/home'?false:true
      },
      methods:{
        goBack(){
          this.$router.go(-1)
        }
      },
      watch:{
        '$route.path':function (value) {
          if(value == '/home'){
            this.flag = false
          }else{
            this.flag = true
          }
        }
      }
    }
</script>

<style scoped>

</style>
