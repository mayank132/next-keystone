/** @type {import('next').NextConfig} */
const nextConfig = {
  
  experimental: {
    appDir: true,
    optimizeCss: true, 
    serverActions: true,
  },
}

module.exports = nextConfig
