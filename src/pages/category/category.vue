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
      <div class="lContainer" ref="lContainer">
        <ul class="navList">
          <li class="navItem" @click="changeIndex(index)" v-for="(navItem,index) in cateNav.categoryL1List" :key="navItem.id" >
            <a :class="{active:navIndex===index}" href="javascript:;">{{navItem.name}}</a>
          </li>          
        </ul>
      </div>
      <div class="rContainer">
        <div class="itemDetail">
          <img src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
          <ul class="itemList">
            <li class="itemLi">
              <img src="https://yanxuan.nosdn.127.net/f68c16727409880d6b7717873c4f2597.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
              <span class="text">员工精选</span>
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
      navIndex:0
    }
  },
  computed:{
    ...mapState(['cateNav'])
  },
  methods:{
    ...mapActions([GETCATENAV]),
    ...mapActions([GETCATEDATA]),
    //点击不同的导航
    changeIndex(changeIndex){
      this.navIndex=changeIndex
    },
    //导航滑屏初始化
    initScroll(){
      this.$nextTick(() => { 
            this.scroll = new BScroll(this.$refs.lContainer, {click: true}) 
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
      padding 30px 30px 21px 20px
      background #333

</style>