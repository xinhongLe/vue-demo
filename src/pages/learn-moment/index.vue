<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <span>{{$moment(scope.row.date).format('YYYY-MM-DD')}}</span>
          <p>{{$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')}}</p>
          <p>{{$moment().weekday(-1).format('YYYY-MM-DD')}}</p>
          <p>{{$moment().startOf('year').valueOf()}}</p>
          <p>更新了</p>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div>{{'值：'+ str}}</div>
    <el-button type="primary" @click="handleClick">点击</el-button>
  </div>
</template>
<script>
  import { str } from './index'
  export default {
    name: "index",
    data() {
      return {
        str: str,
        tableData: [{
          date: '2016-05-02 12:30:34',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04 17:30:34',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01 15:30:34',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03 21:30:34',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        obj:{
          name:'jock',
          age:'18',
          describe:'我的名字是jock'
        }
      }
    },
    methods: {
      handleClick() {
        this._handleQuery().then(res =>{
          console.log(res,'试一下')
        }).then(()=>{
          const arr1 = Object.values(this.obj)
          return arr1
        }).then(res =>{
          console.log(res, '2')
        })
      },
      _handleQuery(){
        return new Promise(resolve =>{
          const aa = '尝试promise'
          resolve(aa)
        })
      },
      // async _handleQuery(){
      //   return '尝试async'
      // }
    },
  }
</script>
<style scoped lang="sass">
</style>
