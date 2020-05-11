<template>
  <div class="personContainer">
    <!-- 头部 -->
    <yan-start headerTitle="网易严选"></yan-start>
    <div class="personContent">
          <img src="./39c5e4583753d4c3cb868a64c2c109ea.png" alt="logo" />
    <div class="loginM">
      <div class="phone" @click="goto('/login')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号快捷登录</span>
      </div>
      <div class="emial">
        <van-icon name="envelop-o" />
        <span>邮箱账号登录</span>
      </div>
    </div>
    <div class="methods">
      <div class="wechat">
        <van-icon name="chat" />
        <span>微信</span>
      </div>
      <div class="qq">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </div>
      <div class="weibo">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import start from "components/yan-start/yan-start.vue";
import { Icon } from "vant";
Vue.use(Icon);

export default {
  naeme: "person",
  components: {
    "yan-start": start
  },
  methods:{
    goto(path){
       this.$router.replace(path)
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/fun.styl';

.personContainer
  .personContent
    height  90vh
    display flex
    flex-direction column
    align-items center//水平局中
    img 
      padding add(80)  add(116)
      width: add(134)
      height: add(45)
    .loginM
      text-align center
      line-height add(47)
      padding-bottom add(116)
      .phone
        width add(335)
        height add(47)
        color #ffffff
        font-size add(14)
        background #dd1a21
        margin-bottom add(16)
      .emial
        width add(335)
        height add(47)
        color #dd1a21
        font-size add(14)
        border 1px solid #dd1a21
    .methods
      padding-top add(116)
      width 100%
      height add(20)
      display flex
      justify-content center
      color #7f7f7f
      font-size add(14)
      // line-height add(14)
      .wechat
        padding 0 add(20)
        border-right 1px solid #7f7f7f
      .qq
        padding 0 add(20)
        border-right 1px solid #7f7f7f
      .weibo
        padding 0 add(20)


</style>
