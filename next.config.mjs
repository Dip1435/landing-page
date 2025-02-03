/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: '/landing-page',
  assetPrefix: '/landing-page/',
  output: 'export'
 
};

export default nextConfig;
