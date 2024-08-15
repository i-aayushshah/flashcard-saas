/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `http://localhost:3000/api/:path*`, // Change as needed for API proxy
        },
      ];
    },
  };
