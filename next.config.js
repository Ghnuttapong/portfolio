/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    ]
  }
}

module.exports = nextConfig
