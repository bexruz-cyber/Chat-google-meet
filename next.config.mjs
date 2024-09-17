/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'elcfdbprgiqutqctqfit.supabase.co',
          },
        ],
      },
  };
  
  export default nextConfig;
  