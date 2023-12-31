/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.themealdb.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname: '/images/**' ,
          },
        ]
      },
}

module.exports = nextConfig
