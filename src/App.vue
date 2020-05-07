<template>
  <div id="app">
    {{test}}
    <router-view></router-view>
    <yan-guide v-show="$route.meta.showGuide"></yan-guide>
  </div>
  
</template> 

<script>
import http from '@/http'
import {mapState} from 'vuex'
import guide from 'components/yan-guide/yan-guide'
export default {
  name: 'App',
  computed:{
      ...mapState(['test'])
  },
  components: {
   "yan-guide":guide,
  },
  mounted(){
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  height 100%
  width 100%
</style>
