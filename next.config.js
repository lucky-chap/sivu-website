const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
  experimental: {
    optimizeFonts: true,
    modern: true,
  },
  images: {
    domains: ['img.youtube.com', 'avatars.githubusercontent.com', 'api.producthunt.com', 'images.unsplash.com'],
    dangerouslyAllowSVG: true,
  },
  productionBrowserSourceMaps: true,
  target: 'serverless',
  redirects: require('./next-redirect'),
})
