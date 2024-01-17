/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'components')
    return config
  },
}

module.exports = nextConfig
