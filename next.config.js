/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, images:{domains:["zhhxicwoypemcvzpqfgl.supabase.co"]}
}

const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
 dest: 'public', 
 register: true,
 skipWaiting: true,
 runtimeCaching
})

module.exports = withPWA({
 // other congigs
 reactStrictMode: false
})

module.exports = nextConfig
