// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  pwa: {
    name: 'PWA VUE',
    themeColor: '#fff',
    msTitleColor: '#000',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
    },
  },
}