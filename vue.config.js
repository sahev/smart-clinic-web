const webpack = require('webpack')

module.exports = {
  publicPath: process.env.VUE_APP_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ]
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: process.env.VUE_APP_API_URL
  }
}
