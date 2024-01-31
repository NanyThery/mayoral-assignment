/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'assets.mayoral.com',
        pathname: '/images/',
      },
    ],
  },
};

module.exports = config;
