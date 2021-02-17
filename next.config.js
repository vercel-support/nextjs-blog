module.exports = {
  async rewrites() {
    return [
      // Rewriting to an external URL
      {
        source: '/nginx/:slug*',
        destination: 'https://romantic-visvesvaraya-39e8bf.netlify.app/nginx/:slug*',
      },
    ]
  },
  trailingSlash: true,
}
