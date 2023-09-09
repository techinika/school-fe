/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "amazonaws.com",
      "leverageedublog.s3.ap-south-1.amazonaws.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "www.techopedia.com"
    ],
  },
};

module.exports = nextConfig;
