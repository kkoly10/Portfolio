/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer modern formats for the project thumbnails and portrait.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
