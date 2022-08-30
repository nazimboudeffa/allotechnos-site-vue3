const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

vue.config.js
module.exports = {
  // options...
  devServer: {
        proxy: 'https://api.awin.com/',
    }
}
