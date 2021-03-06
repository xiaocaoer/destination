//发送请求的原材料,地址,请求方式,
export default {
  name: "wangi",
  api: {
    // 配置代理后请求,由静态资源服务器代发给自己搭建的服务器
    getIndexData: {//首页
      url: "/indexData",
      method: "get",
      toast: true,
      corsUrl: "/4001api"
    },   
    getIndexCateModule: {//首页导航
      url: "/indexCateModule",
      method: "get",
      toast: true,
      corsUrl: "/4001api"
    },    
    getCateNavDatas: {//分类页左侧导航数据
      url: "/cateNavDatas",
      method: "get",
      toast: true,
      corsUrl: "/4001api"
    },   
     getCateLists: {///分类页右侧内容数据
      url: "/cateLists",
      method: "get",
      toast: true,
      corsUrl: "/4001api"
    },
    // 配置代理后请求,由静态资源服务器代发给网易云后台
    getNavWap: {//值得买nav
      url: "/topic/v1/know/navWap.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    },
    // 值得买页面瀑布流数据/topic/v1/find/recManual.json
    getRecManual: {//值得买nav
      url: "/topic/v1/find/recManual.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    },

    //值得买页面瀑布流动态数据
    getRecAuto:{
      url: "/topic/v1/find/recAuto.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    },
    //搜索页面原始数据
    getSearchRawData:{
      url: "/xhr/search/init.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    },
    // /xhr/search/searchAutoComplete.json
    //搜索关键字
    getSearchWord:{
      url: "/xhr/search/searchAutoComplete.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    }
  },

}