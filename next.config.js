const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withPurgeCSS = require('next-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

const nextConfig = {
  target: process.env.BUILD_TARGET || 'server',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }
}

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        importLoaders: 1,
        localIdentName: '[local]_[hash:base64:5]'
      }
    ],
    [
      withPurgeCSS,
      {
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'css', 'tsx']
          }
        ]
      }
    ],
    withTypescript
  ],
  nextConfig
)
