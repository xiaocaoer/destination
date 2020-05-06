<template>
  <div id="app">
    app
    <router-view></router-view>
  </div>
  
</template>

<script>
import http from '@/http'
export default {
  name: 'App',
  components: {
   
  },
 async mounted(){
    let data = await http.wangi.getIndex()
    console.log(data)
  }
}
</script>

<style>

</style>
