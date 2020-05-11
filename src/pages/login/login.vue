<template>
  <div class="loginContainner">
   <!-- 头部 -->
    <yan-start class="start" headerTitle="网易严选"></yan-start>
    <div class="loginContent">
      <img src="./39c5e4583753d4c3cb868a64c2c109ea.png" alt="logo" />
      <div class="formContainer">
     <!-- type="tel"  -->
        <van-field 
          v-model="tel"
          
          label="" 
          placeholder="请输入手机号" 
        />
        <van-field
          v-model="sms"
          center
          clearable
          label=""
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>

        <div class="issue">
          <span class="problem">遇到问题?</span>
          <span>使用密码验证登录</span>
        </div>

        <div class="phone" @click="verify">
          <span>登录</span>
        </div>
        <div class="agree" style="">
          <input type="checkbox">
          <span>我同意<i style="color:#007Aff;font-style:normal">《服务条款》</i>和<i style="color:#007Aff;font-style:normal" font-style:normal>《网络隐私协议》</i> </span>
        </div>
        <div class="other">
          <span>其他登录方式</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field,Checkbox,Icon } from 'vant';
Vue.use(Field);
Vue.use(Icon);
import start from "components/yan-start/yan-start.vue";

export default {
  name:"login",
  data(){
    return{
      checked:true
    }
  },
  components: {
    "yan-start": start
  },
  components:{
    verify(){
      console.log('111')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/fun.styl';

.loginContainner
  .start 
  .loginContent
    img 
      display block 
      margin 0 auto
      padding-top add(28)  
      padding-bottom  add(28)  
      width: add(134)
      height: add(45)
    .formContainer
      padding 0 add(20)
      .phone
        text-align center
        line-height add(45)
        width add(335)
        height add(45)
        color #ffffff
        font-size add(14)
        background #dd1a21
        margin-bottom add(16)
      .issue
        padding 0 add(15)
        height add(45)
        color #333
        font-size add(14)
        line-height add(45)
        display flex
        justify-content space-between
        .problem
          color #7f7f7f
      .agree
        color #7f7f7f
        height add(30)
        line-height add(30)
      .other
        text-align center
        color #333
        font-size add(14)
        padding-top add(20)
</style>