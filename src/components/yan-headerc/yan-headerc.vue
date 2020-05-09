<template>
  <div class="headerContainer">
    <div class="top">
      <van-icon  class="home" name="wap-home-o" size="24" @click="goto('/home')" />
      <h2>{{headerTitle}}</h2>
      <div class="rTop">
        <van-icon class="icon" name="search" size="24" @click="goto('/search')" />
        <van-icon class="icon" name="shopping-cart-o"  size="24" @click="goto('/cart')" />
      </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem ,Icon} from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);

export default {
  name:"header",
  props:{
    headerTitle:String
  },
  methods:{
    goto(path){//路由器上的replace方法,路由是上的path 但是这里没有历史记录,返回不了
        this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus">
.headerContainer
  .top
    height 100px
    padding 0 24px 0
    background #fafafa
    display flex
    justify-content space-between
    .home
      line-height 100px
    h2
      color #000
      font-size 36px
      line-height 100px
      padding-left 36px
    .rTop
      .icon
        line-height 100px
        width 60px
        box-sizing border-box
          

</style>
