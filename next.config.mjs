/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.w3.org', 'us-east-1-shared-usea1-02.graphassets.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
