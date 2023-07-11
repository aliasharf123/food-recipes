/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.themealdb.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname: '/images/media/meals/**',
          },
        ]
      },
}

module.exports = nextConfig
