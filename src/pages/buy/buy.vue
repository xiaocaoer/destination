<template>
<div class="buyContainer">
  <!-- 头部 -->
  <yan-start headerTitle="值得买"></yan-start>

  <div class="contentContainer">
    <div class="content">
      <!-- 上方宫格区域 -->
      <div class="bg">
        <van-grid v-if="navList">
          <van-grid-item :icon="navItem.picUrl" :text="navItem.mainTitle" v-for="(navItem) in navList" :key="navItem.id"/>
        </van-grid>
      </div>
      <!-- 瀑布流区域 -->

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
import start from 'components/yan-start/yan-start.vue'
import {GETNAVWRAP,GETRECMANUAL} from 'store/mutation_types'
import {mapState,mapActions} from 'vuex'


export default {
  name:"buy",
  components:{
    "yan-start":start
  },
  computed:{
    ...mapState(['navWrap']) ,
    ...mapState(['recManual']),
    navList(){
      if(this.navWrap){
        return this.navWrap.navList
      }
    }
  },
  methods:{
    ...mapActions([GETNAVWRAP]),
    ...mapActions([GETRECMANUAL]),
    goto(path){//路由器上的replace方法,路由是上的path 但是这里没有历史记录,返回不了
        this.$router.replace(path)
    }
  },
  async mounted(){
    await this[GETNAVWRAP]()//获取导航
    await this[GETRECMANUAL]()//获取瀑布流
    console.log(this.navWrap)
  }
}
</script>

<style  lang="stylus">
@import '../../common/stylus/fun.styl';
// 这里使用stylus函数 add利用add实现375页面看见多少写多少
.buyContainer
  .contentContainer
    .content
      .bg
        width add(375)
        height add(343)
        background-image url(./topic_bg.png)
        background-size cover //,缩放背景图,让背景图铺满背景盒子的整个区域即可


</style>
