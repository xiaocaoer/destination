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
        <image :src="policyItem.icon" mode=""></image>
        <text>{{policyItem.desc}}</text>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper及其样式文件,样式文件写这个路径会自动找的
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {mapState} from 'vuex'

export default {
  name: "yan-recommed",
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
    position relative
    top 150px
    left 0
    .swiper-wrapper
      display flex
      .swiper-slide
        width 100%
        img 
          width 100%
          height 296px
</style>