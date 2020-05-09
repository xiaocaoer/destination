module.exports = {
  plugins: {
      autoprefixer: {
      },
      "postcss-px2rem-exclude": {//在不修改vant组件大小的情况下适配屏幕
          remUnit: 75,
          exclude: /node_modules|folder_name/i   // 忽略node_modules目录下的文件
      },
      'postcss-pxtorem': {//配置vant组件适配
        rootValue: 37.5,
        propList: ['*'],
      },
  },
  
}
