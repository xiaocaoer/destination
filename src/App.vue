<template>
  <div id="app">
    <span class='iconfont icon-qingkong1'></span>
    <div class="box"></div>
    <router-view></router-view>
    <yan-guide></yan-guide>
  </div>
  
</template>

<script>
import http from '@/http'

import guide from 'components/yan-guide/yan-guide'
export default {
  name: 'App',
  components: {
   "yan-guide":guide,
  },
 async mounted(){
    let data = await http.wangi.getIndex()
    console.log(data)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.box
  width 200px
  height 200px 
  background red 
  margin 0 auto
</style>
