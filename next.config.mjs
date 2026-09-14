/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/blog/alanya-matbaa", destination: "/blog", permanent: true },
      { source: "/blog/what-is-digital-printing", destination: "/blog", permanent: true },
      { source: "/blog/what-is-offset-printing", destination: "/blog", permanent: true },
      { source: "/blog/what-is-stamp", destination: "/blog", permanent: true },
    ]
  },
}

export default nextConfig
