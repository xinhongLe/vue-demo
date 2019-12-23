<template>
  <div>
    <el-menu-item :index="menu.path">{{menu.name}}</el-menu-item>
  </div>
</template>
<script>
  export default {
    name: "menuItem",
    props:{
      menu:{
        type:Object
      }
    },
  }
</script>
<style scoped>
</style>
