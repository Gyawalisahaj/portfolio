/** @type {import('next').NextConfig} */
const nextconfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

module.exports = nextconfig;