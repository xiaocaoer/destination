<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <yan-start headerTitle="值得买"></yan-start>

    <div class="contentContainer">
      <div class="content">
        <div class="bg">
          <!-- 上方宫格区域 -->
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="navListArr">
              <div class="swiper-slide"  v-for="(firstItem,index) in navListArr" :key="index">
                <ul class="ulList">
                  <li class="liItem" v-for="(secItem,index) in firstItem" :key="index">
                    <van-image width="60" height="60" :src="secItem.picUrl" />
                    <span class="mainTitle">{{secItem.mainTitle}} </span>
                    <span class="viceTitle">{{secItem.viceTitle}} </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>


        <!-- 瀑布流区域 -->
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper及其样式文件,样式文件写这个路径会自动找的
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import _ from "lodash"; //引入ladash,类似与jQuery 下划线_就是其核心函数
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Grid, GridItem, Icon } from "vant";
Vue.use(VanImage);
Vue.use(Icon);
import start from "components/yan-start/yan-start.vue";
import { GETNAVWRAP, GETRECMANUAL } from "store/mutation_types";
import { mapState, mapActions } from "vuex";

export default {
  name: "buy",
  components: {
    "yan-start": start
  },
  computed: {
    ...mapState(["recManual","navWrap"]),
    navListArr() {
      //将仓库中的navWrap数据变为多个长度为2的数组,变成了2维数组
      if(this.navWrap){
        return _.chunk(this.navWrap.navList, 2); //参数,要处理的数组,每个数组的长度
      }
    }
  },
  methods: {
    ...mapActions([GETNAVWRAP,GETRECMANUAL]),
    goto(path) {
      //路由器上的replace方法,路由是上的path 但是这里没有历史记录,返回不了
      this.$router.replace(path);
    },
    //宫格轮播图
    renderSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // loop: true, // 循环模式选项
          slidesPerView :4,//一页显示四个小slide
          // 如果需要分页器,小圆点
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  async mounted() {
    await this[GETNAVWRAP](); //获取导航
    await this[GETRECMANUAL](); //获取瀑布流
    this.renderSwiper()
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/fun.styl';

// 这里使用stylus函数 add利用add实现375页面看见多少写多少
.buyContainer 
  .contentContainer
    .content 
      .bg
        overflow hidden
        width: add(375);
        height: add(343);
        background-image: url('./topic_bg.png');
        background-repeat no-repeat 
        background-size: add(375) add(259); // ,缩放背景图,让背景图铺满背景盒子的整个区域即可
        .swiper-container
          width add(355)  
          height add(270)
          margin-top  add(72.5)
          background #fff
          border-radius 20px
          .swiper-wrapper
            width -moz-fit-content
            width fit-content
            .swiper-slide
              display flex
              .ulList
                width add(90)
                height add(214)
                margin 0 add(3) add(3)
                padding-top add(18)
                // &:last-child
                //   margin-top add(14)
                .liItem
                  display flex
                  flex-direction column
                  justify-content space-between
                  align-items center
                  width add(84)
                  height  add(100.5)
                  &:nth-child(2) //这里好像比较特殊，代表的是一个ulList中的第二个liItem
                    margin-top add(14)
                  .mainTitle
                    font-size add(14)
                    line-height  add(20)
                  .viceTitle
                    font-size add(12)
                    line-height  add(15)
                    color #999



</style>
