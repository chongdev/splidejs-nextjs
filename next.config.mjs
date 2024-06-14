/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    images: {
        unoptimized: true,
        domains: ["images.unsplash.com", "picsum.photos"],
    },
};

export default nextConfig;
