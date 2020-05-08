<template>
  <div class="giftDemo">
    <div class="rText">
      <span class="title">福利社</span>
      <span class="subTitle">今日特价</span>
    </div>
    <div class="lInfo">
      <img src="https://yanxuan-item.nosdn.127.net/00035dccd3dd272ae01611a3325e9e31.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      <div class="price">
        <span class="newPric">¥15.5</span>
        <span class="oldPric">¥18.9</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"gift"
}
</script>

<style scoped lang="stylus">
.giftDemo
    position relative
    width 343px
    height 212px
  .rText
    display flex
    flex-direction column
    .title
      font-size 32px
      line-height 48px
      height 48px
    .subTitle
      color #7f7f7f
      font-size 24px
      height 26px
  .lInfo
    position absolute
    bottom 0
    right 0
    img 
      height 200px
      width 200px
    .price
      position absolute
      top -10px
      right 25px
      display flex
      flex-direction column
      align-items center
      justify-content center
      width 80px
      height 80px
      color #fff
      border-radius 50%
      background #F59524
      letter-spacing -3px
      .newPric
        font-size 30px
        line-height 30px
      .oldPric
        line-height 30px
        font-size 26px
        text-decoration line-through

</style>