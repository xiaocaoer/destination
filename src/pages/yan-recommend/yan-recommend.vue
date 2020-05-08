<template>
  <div class="commendContainer">
    <!-- 推荐页轮播图 -->
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt />
        </li>
        <li class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt />
        </li>
        <li class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt />
        </li>
        <li class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt />
        </li>
        <li class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt />
        </li>
      </ul>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 底部三个图标+文字小东西 -->
    <div class="policyContainer">
      <div class="policyDescList" v-for="(policyItem,index) in indexData.policyDescList" :key="index">
        <img :src="policyItem.icon" mode=""/>
        <span>{{policyItem.desc}}</span>
      </div>
    </div>
    <!-- 十个小个子 kingKongList-->
    <div class="kingKongList" v-if="indexData.kingKongModule">
      <div class="kingKongItem" v-for="(kingKongItem) in indexData.kingKongModule.kingKongList" :key="kingKongItem.L1Id">
        <img :src="kingKongItem.picUrl" alt="">
        <span>{{kingKongItem.text}}</span>
      </div>
    </div>
    <!-- 新用户专享口罩图 -->
    <div class="newUser">
      <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
    </div>
    <!-- 新人专享礼 -->
    <div class="gift">
      <div class="text">— 新人专享礼 —</div>
      <div class="giftContent">
        <div class="left">
          <span>新人专享红包</span>
          <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="" class="redPack">
        </div>
        <div class="right">
          <div class="rTop">
            <yan-gift></yan-gift>
          </div>
          <div class="rbottom">
             <yan-gift></yan-gift>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="hotContainer">
      <yan-hot></yan-hot>
    </div>


  <!-- 占位 -->
      <!-- 新用户专享口罩图 -->
    <div class="newUser">
      <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
    </div>
   
  </div>
</template>

<script>
// 引入swiper及其样式文件,样式文件写这个路径会自动找的
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {mapState} from 'vuex'
import Vue from 'vue';
import gift from 'components/yan-gift/yan-gift.vue'
import hot from 'components/yan-hot/yan-hot.vue'

export default {
  name: "yan-recommed",
  components:{
    "yan-gift":gift,
    "yan-hot":hot
  },
  computed:{
    ...mapState(['indexData'])
  },
  methods: {
    //轮播图
    renderSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          // 如果需要分页器,小圆点
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  mounted(){
    this.renderSwiper()
  }
};
</script>

<style scoped lang="stylus">
.commendContainer
  .swiper-container
    .swiper-wrapper
      display flex
      .swiper-slide
        width 100%
        img 
          width 100%
          height 296px
  .policyContainer
    display flex
    align-items center
    height 72px
    width 100%
    .policyDescList
      text-align center
      height 72px
      width 100%
      color #333
      line-height 72px
      img 
        width 32px
        height 32px
        vertical-align middle
        margin-right 5px
      span 
        font-size 24px
        vertical-align middle
  .kingKongList
    display flex
    flex-wrap wrap
    margin 20px 0
    .kingKongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      img
        width 110px
        height 110px
      span
        font-size 24px
        line-height 50px
  .newUser
    width 100%
    height 240px
    img 
      width 100%
      height 100%
  .gift
    width 100%
    height 556px
    background #f9e9cf
    .text
      padding 0 30px
      background #ffffff
      color #333
      font-size 32px
      height 90px
      line-height 90px
      text-align center
    .giftContent
      display flex
      .left
        position relative
        width 343px
        height 434px
        padding-left 30px
        text-align center
        span 
          display inline-block//行内元素添加padding,是不正常的往外加,转为行内块吧
          padding 30px 0 0 30px
          font-size 32px
          color #333
        img
          width 258px //img和表单元素是行内块元素,行内元素在块元素中垂直居中,定位
          height 257px
          position absolute
          left 0
          top 0
          bottom  0
          right 0
          margin auto
      .right
        display flex
        flex-direction column
        width 343px
        height 438px
        border-left 1px solid #fff
        .rTop
          width 343px
          height 215px
          // background green
          padding 20px 0 0 30px
        .rbottom
          width 342px
          height 215px
          padding 20px 0 0 30px
          border-top 4px solid #fff
          background #FFECC2
  .hotContainer
    border-top 30px solid #eee
    border-bottom  30px solid #eee
</style>