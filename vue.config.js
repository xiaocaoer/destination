const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit:75 //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})      //网易严选的所有页面都转为750的页面去计算宽度

//__dirname 绝对路径;代表的是当前文件的目录，
const path = require('path')
function resolve (dir) {//配置别名的resolve函数，依赖于path
    return path.join(__dirname, dir)
}

module.exports={
  lintOnSave:false,//关闭eslint在保存时的校验
  devServer:{//deServer就是静态资源服务器
    open:true,
    // proxy: 'http://localhost:4000'//配置代码,跨单域,项目的接口 都在4000服务器上,就解决了问题,可以请求回来数据
    
    //跨多域://如果说项目的接口来至于不同的服务器 4000服务器  5000服务器  6000服务器
    proxy: {
      '/163api': {//api可以写任何东西,跟target后的第一个路径,让deServe去匹配代理
        target: 'https://m.you.163.com',//服务器地址
        changeOrigin: true,//跨域
        pathRewrite:{
          "^/163api":""
          ///4000api放在请求路径中让静态资源服务器匹配代码,匹配完之后,再发请求,没必要带着这个路径
          //而且,加上这个也匹配不了路由,所以这里的设置是让请求地址中的/4000api匹配完代理之后为空,
          //再转发请求是,地址中没有了/4000api
      }
      },
      '/4001api': {
        target: 'http://localhost:4001',//服务器地址
        changeOrigin: true,
        pathRewrite:{
          "^/4001api":""
      }
      },

    },
  },
  configureWebpack:{//webpack原生配置
    resolve: {//配置别名
        alias: {
            'components': resolve('src/components'),
            'pages': resolve('src/pages'),
            'store': resolve('src/store'),
        }
    }
},
css: {
  loaderOptions: {
    postcss: {
      plugins: [
        postcss
      ]
    }
  }
},

}