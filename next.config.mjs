/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/landing-page/',
  basePath: '/landing-page',
  output: 'export'
 
};

export default nextConfig;
