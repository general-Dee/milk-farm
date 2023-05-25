// next.config.js
// module.exports = {
    /* Other Next.js configuration options */
  
    // Enable TypeScript support
    // typescript: {
      // Enable type checking during development
      // ignoreDevErrors: false,
      // Exclude files from type checking
  //     ignoreBuildErrors: false,
  //   },
  // };

// const withPlugins = require('next-compose-plugins');
// const withCSS = require('@zeit/next-css');
// const withTM = require('next-transpile-modules')(['tailwindcss']);

// module.exports = withPlugins([withCSS, withTM], {
//   // Other Next.js configuration options
// });


/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['asserts.example.com'],
  },
}

  