<template>
  <div class="home"  >
    <div class="homeContainer">
      <!-- 头部 -->
      <div class="headerContainer">
        <header>
          <h1><img src="./logo.png" alt="logo"></h1>
          <div class="search" >
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品,共25372款产品</span>
          </div>
          <button class="login">登录</button>
        </header> 
        <!-- 上方导航 -->
          <nav class="navContainer" ref="navContainer">
          <ul class="navList"> 
            <!-- 这里第一个是固定的推荐,然后是请求回来的那些数据的导航 -->
            <li class="navItem" :class="{active:navIndex===0 }" @click="changeNav(0)">推荐</li>
            <li class="navItem" :class="{active:navIndex===index+1}" @click="changeNav(index+1)" v-for="(navItem,index) in indexNav" :key="navItem.id">
              {{navItem.name}}
            </li>
          </ul>
        </nav>
      </div>

      <!-- <router-view></router-view> -->
      <div class="contentContainer" ref="home">
        <yan-recommend></yan-recommend>
      </div>
    </div>

  </div>
</template>

<script>
// 引入swiper及其样式文件,样式文件写这个路径会自动找的
import Swiper from "swiper";
import "swiper/css/swiper.min.css"
import BScroll from 'better-scroll'
import Vue from 'vue';
import {mapActions,mapState} from "vuex";
import {GETINDEXDATA,GETINDEXNAV} from '@/store/mutation_types'
import recommend from '../yan-recommend/yan-recommend'

export default {
  name:'home',
  components:{
   "yan-recommend":recommend
  },
  data(){
    return{
      navIndex:0
    }
  },
  computed:{
    ...mapState(['indexNav'])
  },
  methods:{
      ...mapActions([GETINDEXDATA]),
      ...mapActions([GETINDEXNAV]),
      //单击导航
      changeNav(TargetIndex){
        this.navIndex=TargetIndex
      },
      //导航滑屏初始化
      initScroll(){
        this.$nextTick(() => { 
              this.scroll = new BScroll(this.$refs.navContainer, {scrollX:true,click: true}) 
          }) 
      },
      //整个页面滑屏
      allScroll(){
        this.$nextTick(() => { 
          this.scroll = new BScroll(this.$refs.home) 
        }) 
      }
  },
  async mounted(){
    await this[GETINDEXDATA]();
    await this[GETINDEXNAV]();
    this.initScroll()
    this.allScroll()
  }
}
</script>

<style scoped lang="stylus">
.home
  width 100%
  height 100%
  .homeContainer
    width 100%
    overflow hidden //清除塌陷
    .headerContainer
      width 100%
      height 150px
      position fixed
      z-index 99
      background-color #fff
      left 0
      top 0
      header 
        width 100%
        display flex
        align-items center
        padding 16px 30px
        h1
          height 40px
          width 138px
          margin-right 20px
          img 
            height 100%
            width 100%
        .search
          width 422px
          height 56px
          line-height 56px
          font-size 28px
          border-radius 10px
          color #666666
          background-color #ededed
          text-align center
          .iconfont 
            margin-right 10px
        .login
          width 72px
          height 40px
          line-height 38px
          border 2px solid #DD1A21
          font-size 24px
          border-radius 5px
          margin-left 16px
          white-space  nowrap
          color  #DD1A21
      .navContainer
        width 100%
        .navList
          display flex
          flex-wrap nowrap
          // 下面这两行,让ul不要继承父盒子的宽度
          width -moz-fit-content
          width fit-content
          .navItem
            position relative
            height 60px
            line-height 60px
            font-size 28px
            padding 0 16px
            color #333
            white-space nowrap
            &.active
              color #DD1A21
              &:after
                position absolute
                bottom 2px
                left 10%
                content ''
                height 2px
                width 80% 
                background #DD1A21
    .contentContainer
      margin-top 150px
      height 81.4vh

              

          

   






</style>
