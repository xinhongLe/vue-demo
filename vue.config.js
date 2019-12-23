const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  // devServer: {
  //   publicPath: '/', // 和 baseUrl 保持一致
  //   port: 8003,
  //   proxy: {
  //     // '/apis': {
  //     //   target: serverUrl,
  //     //   changeOrigin: true,
  //     //   ws: false,
  //     //   pathRewrite: {
  //     //     '^/apis': ''
  //     //   }
  //     // }
  //   }
  // },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    config.resolve.alias.set('@', resolve('src'))
  },
}
