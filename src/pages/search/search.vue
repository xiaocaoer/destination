<template>
  <div class="searchContainer">
    <div class="searchV">
     <div class="key">
        <i class="iconfont icon-sousuo"></i>
        <input type="text"   placeholder="好货内部价" v-model.trim="searchWord">
     </div>
      <span @click="searchWord='' ">取消</span>
    </div>
    <!-- 搜索结果区域 -->
    <div class="maskContainer" v-show="searchWord">
      <ul class="maskList">
        <li class="maskItem" v-for="(item,index) in searchWordList" :key="index">
          <span class="result">{{item}}</span>
          <van-icon class="icon" name="arrow" />
        </li>     
      </ul>
    </div>
    <!-- 热词展示区域 -->
    <div class="searcH">
      <div class="sTitle">热门搜索</div>
      <ul class="keywordList">
        <li class="keywordItem" v-for="(wordItem,index) in searchRawData" :key="index" >
          <a href="javascript:;">{{wordItem.keyword}}</a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import http from "@/http" //发请求
import { Icon } from 'vant';
Vue.use(Icon);

export default {
  data(){
    return {
      searchRawData:[],
      searchWord:'',//将用户搜索词随时保存在这个
      searchWordList:[]
    }
  },
  watch:{
    //当用户输入搜索词时触发
    async searchWord(){
      //开启延时定时器,连续输入不发请求
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
         this.getSearchWord()
      },1000)
     
    }
  },
  methods:{
    //获取页面初始化数据
    async getSearchRawData(){
      const {code,data} = await http.wangi.getSearchRawData();
      if((code*1)===200){
        this.searchRawData = data.hotKeywordVOList
      }
    },
    //搜索
    async getSearchWord(){
      const {code,data} = await http.wangi.getSearchWord({keywordPrefix:this.searchWord});
      if((code*1)===200){
        this.searchWordList = data
      }
    }
  },
  async mounted(){
    await this.getSearchRawData()
  }
}

</script>

<style scoped lang="stylus">
.searchContainer
  position relative
  padding 0 30px
  .searchV
    display flex
    align-items center
    height 88px
    padding 0 30px
    color #333
    line-height 88px
    .key
      width 604px
      height 56px
      background #f4f4f4
      input
        background #f4f4f4
    span
      white-space nowrap
  .maskContainer
    position absolute
    top 88px
    left 0
    width 100%
    height 93.4vh
    background #eee 
    box-sizing border-box
    .maskList
      background-color: #fff
      padding 0 30px
      // height 
      .maskItem
        height 104px
        line-height 104px
        font-size 28px
        color #333
        display flex
        justify-content space-between
        .icon
          font-size 40px
          line-height 104px
  .searcH
    .sTitle
      height 90px
      color #999
      line-height 90px
      font-size 28px
    .keywordList
      display flex
      flex-wrap wrap
      .keywordItem
        margin 0 32px 32px 0
        border 1px solid #999
        font-size 24px
        a
          display block
          padding 10px 10px



</style>