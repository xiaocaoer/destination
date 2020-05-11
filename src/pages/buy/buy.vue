<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <yan-start headerTitle="值得买"></yan-start>

    <div class="contentContainer" ref="contentContainer">
      <div class="content">
        <div class="bg">
          <div class="adv">
            <img src="./topic_logo.c2284970.png" alt="加载失败">
            <span class="smallT">严选好生活</span>
          </div>

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
            <div class="swiper-pagination"></div>
          </div>
          </div>
        <!-- 瀑布流区域 -->
        <div class="contentP">
          <!-- <div class="waterContainer"> -->
            <vue-flex-waterfall
                class="waterContainer"
                :col="2"
                :col-spacing="10"
                :break-by-container="false"
                @order-update="onOrderUpdate"

                style="align-content: center;"
              >
               <div class="cell-item"  v-for="(item,index) in waterFallList" :key="index"> 
                    <img :src="item.picUrl" alt="加载错误"  /> 
                    <div class="item-body">
                        <div class="item-desc">{{item.title}} </div>
                        <div class="item-footer">
                            <div class="topicInfo">
                              <div class="useB">
                                <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                                <div class="name">{{item.nickname}} </div>
                              </div>
                              <div class="read"  >
                                  <van-icon  class="icon" name="eye-o" />
                                  <span class="readCount">{{item.readCount}} </span>  
                              </div>
                            </div>
                            <div class="goBuy" v-if="item.buyNow">
                              <div class="intoBuy">
                                <span class="proInfo">{{item.buyNow.itemName}} </span>
                                <span>去购买</span>
                                <van-icon  name="arrow" />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
              </vue-flex-waterfall>
          <!-- </div> -->
        </div>
        <!-- 瀑布流布局结束 -->
      </div>  
    </div>
  </div>
</template>


<script>
//瀑布流
import VueFlexWaterfall from 'vue-flex-waterfall';
// 引入swiper及其样式文件,样式文件写这个路径会自动找的
import BScroll from 'better-scroll'
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
import http from "@/http" //发请求



export default {
  name: "buy",
  data(){
    return{
      waterFallList:[], //瀑布流数据,表示第一次/上一次请求回来的数据
      autoList:[],//动态瀑布流数据 page1 2  最新发请求回来的数据
      // waterList:[],//1+2
      page:1, //瀑布流数据页数
      size:2,//长度
    }
  },
  components: {
    VueFlexWaterfall,
    "yan-start": start,
  },
  computed: {
    ...mapState(["recManual","navWrap"]),
    navListArr() {
      //将仓库中的navWrap数据变为多个长度为2的数组,变成了2维数组
      if(this.navWrap){
        return _.chunk(this.navWrap.navList, 2); //参数,要处理的数组,每个数组的长度
      }
    },

    

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
    },
    //第一次瀑布流数据整理
    waterfall(){
      //recManual数组中每一项是个对象,拿到对象中的topics属性,值为数组,将其解包,添加到自己waterfallList上
      let result=[]
      // console.log(this.recManual,'1521111111111');
      this.recManual.forEach((item,index) => {
        result.push(...item.topics)
      })
      
     this.waterFallList = result
     
    },
    //瀑布流需要
    onOrderUpdate(data){
      console.log('111', data)
    },
    //发请求获取第一页的动态数据,将动态数据存储在autoList中
    async getRecAuto(){
      const {code,data} = await http.wangi.getRecAuto({page:this.page,size:this.size});
      if((code*1)===200){
        let rawResult =data.result
        // console.log(rawResult)
        //加工懒加载获取到的瀑布流数据,并添加到 autoList
        rawResult.forEach((item,index) => {
          this.autoList.push(item.look)
          item.topics.forEach((secItem,index) => {
            this.autoList.push(secItem)
          })
        })   
        // this.waterList = [...this.waterFallList, ...this.autoList]
        this.waterFallList = [...this.waterFallList, ...this.autoList]
      }
    },  
        //内容区域滑屏
    recScroll(){
      this.$nextTick(() => { 
        console.log(this,'@@@@@@@');
            this.scroll = new BScroll(this.$refs.contentContainer, {
              click: true, 
              pullUpLoad: { //事件回调定义再methods中
              threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件,发请求获取下一页数据
                }
            }) 
            //滑动的底部上拉加载更多，滑动到底部时这个事件就会被出发
            this.scroll.on('pullingUp',()=>{
                  //当滚动到底部的时候调用。
                    console.log("底部到了")
                    this.page += this.page
                    this.getRecAuto({page:this.page,size:this.size})//发请求获取下一页数据
                   
                    this.scroll.finishPullUp() //告诉better-scroll数据已经加载完毕,不写这个,只能发一次这种请求
                    this.scroll.refresh()

                    // this.$emit('pullingUp')

            })
        }) 
    }, 
  },
  async mounted() {
    await this[GETNAVWRAP](); //获取导航
    await this[GETRECMANUAL](); //获取瀑布流
    this.waterfall() //第一次数据回来后整理瀑布流
    await this.getRecAuto()//获取瀑布流第一页的数据
    console.log(this.waterFallList);
    
    // this.freshWaterList() //整理瀑布流数据
    this.recScroll()//内容区滑屏
    this.renderSwiper() //宫格轮播
    
    

  }
}
</script>

<style  lang="stylus">
@import '../../common/stylus/fun.styl';
// 这里使用stylus函数 add利用add实现375页面看见多少写多少

.buyContainer 
  .contentContainer
    overflow hidden
    height  85.1vh
    .content 
      .bg
        position relative
        overflow hidden
        width: add(375);
        height: add(343);
        background-image: url('./topic_bg.png');
        background-repeat no-repeat 
        background-size: add(375) add(259); // ,缩放背景图,让背景图铺满背景盒子的整个区域即可
        .adv
          position absolute
          left add(18)
          top add(30)
          img
            width add(65)
            height add(34)
            vertical-align middle
          .smallT
            color #fff
            font-size add(15)
            vertical-align middle
            line-height 24px
            position relative
            top 8px
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
      .contentP
        background #eee
        padding add(10) add(10) 0
        .waterContainer
          display flex
          width 100%
          height  85.1vh
          flex-wrap wrap
          justify-content space-between
          .cell-item
            width  add(172.5)
            background #fff
            border-radius 20px 20px 0 0
            margin-bottom 12px
            img 
              width  add(172.5)
              border-radius 20px 20px 0 0
            .item-body
              .item-desc
                width add(171.5)
                height add(49)
                line-height add(20)
                color #333
                box-sizing border-box
                padding add(9) add(8) add(0)
                font-size add(14)
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; //这里是在第二行有省略号
                overflow: hidden;
                // background gray
              .item-footer
                display 
                .topicInfo
                  display flex
                  justify-content space-between
                  height add(24)
                  line-height add(24)
                  padding add(8.5) add(8) add(12)
                  font-size 12px
                  .useB
                    display flex
                    .avatar
                      width add(24)
                      height add(24)
                      border-radius 50%
                      margin-right add(4)
                  .read
                    display flex
                    font-size add(12)
                    align-items  center
                    // line-height  add(24)
                    // letter-spacing 2px
                    span 
                      margin-left 2px
                    .icon 
                      font-size add(16px)
                .goBuy
                  display flex
                  font-size add(12)
                  .intoBuy
                    display flex
                    justify-content space-between
                    color #DD1A21
                    width add(152.5)
                    border-top .5px solid #d9d9d9
                    padding add(10) 0
                    margin 0 19px
                    .proInfo
                      width add(103)
                      color #333
                      overflow: hidden;
                      text-overflow:ellipsis;
                      white-space: nowrap;
              
                      






</style>
