module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [//配置vant
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}

