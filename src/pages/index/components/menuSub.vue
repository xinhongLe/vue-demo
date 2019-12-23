<template>
  <div>
    <el-submenu :index="menu.path">
      <template slot="title">{{menu.name}}</template>
      <template v-for="(subMenu, subIndex) in menu.children">
        <menu-sub v-if="subMenu.children !== undefined" :menu="subMenu" :key="subIndex"></menu-sub>
        <menu-item v-else :menu="subMenu" :key="subIndex"></menu-item>
      </template>
    </el-submenu>
  </div>
</template>
<script>
  import MenuItem from "@/pages/index/components/menuItem";
  export default {
    name: "menuSub",
    components: {MenuItem},
    props:{
      menu:{
        type:Object
      }
    },
  }
</script>
<style scoped>
</style>
