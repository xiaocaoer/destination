<template>
<div class="buyContainer">
  <!-- 头部 -->
  <Yan-Header headerTitle="值得买"></Yan-Header>

  <div class="contentContainer">
    <div class="content">
      <!-- 上方宫格区域 -->
      <div class="bg">
        <van-grid>
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </div>de
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
import header from 'components/yan-headerc/yan-headerc.vue'
import {GETNAVWRAP,GETRECMANUAL} from 'store/mutation_types'
import {mapState,mapActions} from 'vuex'


export default {
  name:"buy",
  components:{
    "Yan-Header":header
  },
  computed:{
    ...mapState(['navWap']) ,
    ...mapState(['recManual']),
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
  }
}
</script>

<style  lang="stylus">
@import '../../common/stylus/fun.styl';
.buyContainer
  .contentContainer
    .content
      .bg
        width add(20, 10px)
        background-image url(./topic_bg.png)


</style>
