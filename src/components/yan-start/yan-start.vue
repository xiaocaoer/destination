<template>
  <div class="headerContainer">
    <div class="top">
      <van-icon size="24" name="wap-home-o" @click="goto('/home')" />
      <h2>{{headerTitle}}</h2>
      <div class="rTop">
        <van-icon class="searchIcon" size="24" name="search"  @click="goto('/search')" />
        <van-icon size="24" name="shopping-cart-o"   @click="goto('/cart')" />
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
  name:"start",//注意这里是组件名,vue会读取,不能跟h5标签同名
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
    align-items center
    justify-content space-between
    .home
      line-height 100px
    h2
      color #000
      font-size 36px
      line-height 100px
      padding-left 46px
    .rTop
      .searchIcon
        margin-right 20px


</style>
