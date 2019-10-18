<template>
    <div>
      <Comment :id="id"/>
    </div>
</template>

<script>
  import Comment from '../../components/Comment/Comment.vue'

    export default {
      name: "GoodComment",
      data(){
        return{
          id:this.$route.params.id
        }
      },
      components:{
        Comment
      }
    }
</script>

<style scoped lang="scss">

</style>
