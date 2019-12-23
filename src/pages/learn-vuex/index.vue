<template>
  <div>
    <div>{{count+'数字'}}</div>
    <div>
      <el-button type="primary" @click="increment">增加</el-button>
      <el-button type="warning" @click="reduce">减少</el-button>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: "index",
    computed: {
      ...mapState({
        count:state => state.count
      })
    },
    methods:{
      ...mapMutations(['reduce']),
      ...mapActions(['increment'])
    }
  }
</script>
<style scoped>
</style>
