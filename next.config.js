/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image-component.nextjs.gallery'],
  },
}

module.exports = nextConfig
