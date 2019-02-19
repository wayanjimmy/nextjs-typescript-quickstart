const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  target: process.env.BUILD_TARGET || 'server',
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withCSS(withTypescript(nextConfig))
