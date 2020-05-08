<template>
  <div class="hotDemo">
    <div class="title">类目热销榜</div>
    <div class="hotContent">
      <ul class="topB">
        <li class="topContent" v-for="(cateItem,index) in indexData.categoryHotSellModule.categoryList" :key="index">
          <span class="text">{{cateItem.categoryName}}</span>
          <img :src="cateItem.showPicUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:"gift",
  computed:{
    ...mapState(['indexData'])
  }
}
</script>

<style scoped lang="stylus">
.hotDemo
  height 710px
  // background pink
  color #333
  .title
    height 90px
    line-height 90px
    padding 0 30px
    font-size 32px
    color #333
    background #fff
  .hotContent
    padding 0 20px 20px 30px
    .topB
      display flex
      flex-wrap wrap
      .topContent //li
        width 165px
        height 180px
        display flex
        flex-direction column
        justify-content center
        align-items center
        background #f5f5f5
        // background gray
        margin 0 10px 10px 0
        span
          font-size 24px
        img
          width 120px
          height 120px
        &:nth-child(1)
          display inline-block
          position relative
          width 338px
          height 200px
          color #333
          font-size 28px
          background #F9F3E4
          margin 0 10px 10px 0
          .text
            position relative
            display block
            padding-top 66px
            padding-left 24px
            &:after
              position absolute
              left 8%
              bottom -20px
              content ''
              height 5px
              width 14%
              background #333
          img 
            width 200px
            height 200px
            position absolute
            right 0
            top 0
        &:nth-child(2)
          display inline-block
          position relative
          width 338px
          height 200px
          color #333
          font-size 28px
          background #EBEff6
          margin 0 10px 10px 0
          .text
            position relative
            display block
            padding-top 66px
            padding-left 24px
            &:after
              position absolute
              left 8%
              bottom -20px
              content ''
              height 5px
              width 14%
              background #333
          img 
            width 200px
            height 200px
            position absolute
            right 0
            top 0
          


</style>