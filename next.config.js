/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },

      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },

      //vou ter que colocar o link de onde busco as imnagens dos projetos 
      //  {
      //  protocol: "https",
       // hostname: "avatars.githubusercontent.com",
       // port: "",
       // pathname: "**",
     // },
      
      
    ],
  },
};

module.exports = nextConfig;
