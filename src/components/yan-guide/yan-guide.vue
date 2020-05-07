<template>
<footer class="footer_guide border-1px">
      <!-- 
        1)	通过编程式导航实现路由的切换显示($router)
        2)	通过动态class和$route.path来实现tab样式切换
                绑定点击事件,回调传递的参数是要跳转到的路由组件的路径,回调中replace路由路径,显示对应的页面
                选中状态的class,如果判断当前路由的路径,如果跟导航指向路由组件的路径相同,就高亮
                在任何组件身上都可以通过$route方法访问到路由,$route.path访问到路由现在的路径
       -->
        <a href="javascript:;" class="guide_item" @click="goto('/home')"  :class="{on:$route.path==='/home'}"> 
             <span class="item_icon">
                <i class="iconfont icon-shouye1"></i>
             </span>
             <span>首页</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/category')"  :class="{on:$route.path==='/category'}">
            <span class="item_icon">
                <i class="iconfont icon-fenlei"></i>
            </span>
            <span>分类</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/buy')"  :class="{on:$route.path==='/buy'}">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>值得买</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/cart')"  :class="{on:$route.path==='/cart'}">
            <span class="item_icon">
              <i class="iconfont icon-gouwuche1"></i>
            </span>
            <span>购物车</span>
        </a>       
         <a href="javascript:;" class="guide_item" @click="goto('/person')"  :class="{on:$route.path==='/person'}">
            <span class="item_icon">
              <i class="iconfont icon-person_round_fill"></i>
            </span>
            <span>个人</span>
        </a>
    </footer>
</template>

<script>
    export default {
        name: "guide",
        methods:{
           goto(path){//路由器上的replace方法,路由是上的path
               this.$router.replace(path)
           }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .footer_guide
        position fixed
        z-index 100
        left 0
        bottom 0
        background-color #fff
        width 100%
        height 98px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color #BB2C08
            span
                font-size 24px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 40px
</style>