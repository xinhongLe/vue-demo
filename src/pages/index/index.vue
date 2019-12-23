<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="(menu, menuIndex) in headerMenu">
        <menu-sub v-if="menu.children !== undefined" :menu="menu" :key="menuIndex"></menu-sub>
        <menu-item v-else :menu="menu" :key="menuIndex"></menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import MenuItem from "@/pages/index/components/menuItem";
  import MenuSub from "@/pages/index/components/menuSub";
  export default {
    name: "index",
    components: {MenuSub, MenuItem},
    data() {
      return {
        activeIndex: '/',
        headerMenu:[
          {
            path:'/',
            name: '处理中心'
          },
          {
            path:'/technology',
            name:'我的工作台',
            children:[
              {
                path:'/learnVuex',
                name:'选项一'
              },
              {
                path:'technology/rgzn2',
                name:'选项二',
                children:[
                  {
                    path:'technology/rgzn2/rgzn3',
                    name:'选项三'
                  }
                ]
              },
            ]
          },
          {
            path:'/learnMoment',
            name: '消息中心'
          },
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if(this.$route.path === key){
          return
        }
        this.$router.push({path: key})
        console.log(key, keyPath);
      }
    },
    mounted() {
      localStorage.setItem('ip', '192.168.99')
    },
  }
</script>
<style scoped lang="scss">
  .el-menu{
    display: flex;
    justify-content: center;
  }
</style>
