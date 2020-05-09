// 分类页组件
<template>
  <!-- 分类页组件 -->
  <div class="category">
    <!-- 头部搜索按钮 -->
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <span>搜索商品,共25372款产品</span>
    </div>

    <!-- 下方内容 -->
    <div class="categoryContainer">
      <!-- 导航 -->
      <div class="lContainer" ref="lContainer">
        <ul class="navList" v-if="cateNav">
          <li class="navItem" @click="changeIndex(navItem.id)" v-for="(navItem) in cateNav.categoryL1List" :key="navItem.id" >
            <a :class="{active:navId===navItem.id}" href="javascript:;">{{navItem.name}}</a>
          </li>          
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="rContainer" ref="rContainer">
        <div class="itemDetail">
          <img class="topImg" src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
          <ul class="itemList" v-if="showlist "  >
            <li class="itemLi" v-for="(item) in showlist.categoryList" :key="item.id">
              <img :src="item.bannerUrl" alt="">
              <span class="text">{{item.name}}</span>
            </li>          
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {GETCATENAV,GETCATEDATA} from 'store/mutation_types'
import {mapState,mapActions} from 'vuex'

export default {
  name:"category",
  data(){
    return{
      navId:0 //当前选中的导航id
    }
  },
  computed:{
    ...mapState(['cateNav']),
    ...mapState(['cateData']),
    //根据导航的id,找到要显示的数据
    showlist(){
      //遍历cateData数组,找到id是navId的那一项
      if(this.cateData instanceof Array){ //这边可能是因为数据转绑和数据劫持的原因,这里读到的cateData可能是个对象
        return this.cateData.find((item,index) => {
            return item.id===this.navId
        })
      }
    }
  },
  watch:{
    cateNav(){//cateNav计算属性初始化之前将第一个导航的id存储起来
      if(this.cateNav){
        // console.log(this.cateNav.categoryL1List[0].id) 
        this.navId=this.cateNav.categoryL1List[0].id
      }
    }
  },
  methods:{
    ...mapActions([GETCATENAV]),
    ...mapActions([GETCATEDATA]),
    //点击不同的导航
    changeIndex(changeId){
      this.navId=changeId
    },
    //导航及右侧内容滑屏初始化
    initScroll(){
      this.$nextTick(() => { 
            this.scrollNav = new BScroll(this.$refs.lContainer, {click: true}) 
            this.scroll = new BScroll(this.$refs.rContainer, {click: true}) 
        }) 
    },
  },
 async mounted(){
   await this[GETCATENAV]()
   await this[GETCATEDATA]()
   this.initScroll()
  },
  

};
</script>

<style scoped lang="stylus">
.category
  .search
    width 690px
    height 56px
    margin 16px auto
    line-height 56px
    font-size 28px
    border-radius 10px
    color #666666
    background-color #ededed
    text-align center
    .iconfont 
      margin-right 10px
  .categoryContainer
    color #333
    height 86vh
    display flex
    .lContainer
      overflow hidden
      height 86vh
      box-sizing border-box
      width 162px
      background #fff
      margin 40px 0 //这里写padding,padding怎么就上去了呢
      .navList
        height 1150px
        .navItem
          color #333!importent
          margin-bottom 40px
          a
            position relative
            display block
            width 162px
            height 50px
            font-size 28px
            line-height 50px
            text-align center
            &.active
              color #AB2B2B
              &:after
                content ''
                position absolute
                left 1px
                top 0
                height 100%
                width 4px
                background #AB2B2B
    .rContainer
      width 528px
      padding 0px 30px 21px 20px
      margin-top 30px
      background #fff
      .itemDetail
        height 1150px
        .topImg 
          width 528px
          height 192px
        .itemList
          display flex
          flex-wrap wrap
          .itemLi
            display flex
            flex-direction column
            // justify-content center
            align-items center
            width 144px
            height 216px
            margin-right 32px
            vertical-align top
            img 
              position relative
              top 0
              left 0
              width 144px
              height 144px
            .text
              text-align center
              font-size 24px
              line-height 48px


</style>