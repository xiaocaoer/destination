<template>
  <div class="cartContainer">
    <div class="cartHeader">
      <span>购物车</span>
      <span>领劵</span>
    </div>
    <div class="cartContent">
      <div class="cartDetail">
        <span>30天无忧退款</span>
        <span>48小时快速退款</span>
        <span>满99元免邮费</span>
      </div>
      <img class="car" src="./noCart-d6193bd6e4.webp" alt="">
      <button class="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"cart"
}
</script>

<style scoped lang="stylus">
.cartContainer
  .cartHeader
    height 88px
    line-height 88px
    display flex
    padding 0 30px
    justify-content space-between
  .cartContent
    width 100%
    height 81.4vh
    .cartDetail
      height 70px
      line-height 70px
      display flex
      justify-content space-between
      background #eeeeee
      color #666
      font-size 24px
      padding 0 30px
    .car
      display block
      width 248px
      margin 0 auto
      margin-top 360px
    .login
      display block
      width 480px
      height 90px
      margin 0 auto
      background red
      color #fff
      border 0px
      font-size 30px
</style>