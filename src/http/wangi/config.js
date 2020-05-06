//发送请求的原材料,地址,请求方式,
export default {
  name: "wangi",
  api: {
    // 配置代理后请求,由静态资源服务器代发给自己搭建的服务器
    getIndex: {//首页
      url: "/index",
      method: "get",
      toast: true,
      corsUrl: "/4000api"
    },   
    getIndexCateModule: {//首页导航
      url: "/indexCateModule",
      method: "get",
      toast: true,
      corsUrl: "/4000api"
    },    
    getCateNavDatas: {//分类页左侧导航数据
      url: "/cateNavDatas",
      method: "get",
      toast: true,
      corsUrl: "/4000api"
    },   
     getCateLists: {///分类页右侧内容数据
      url: "/cateLists",
      method: "get",
      toast: true,
      corsUrl: "/4000api"
    },
    // 配置代理后请求,由静态资源服务器代发给网易云后台
    getNavWap: {//值得买nav
      url: "/topic/v1/know/navWap.json",
      method: "get",
      toast: true,
      corsUrl: "/163api" 
    },

  },

}