/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/work/proveo", destination: "https://proveohq.com", permanent: false },
      { source: "/work/kocre-it", destination: "https://kocreit.com", permanent: false },
      { source: "/work/fleiko", destination: "https://fleiko.com", permanent: false },
      { source: "/work/crecystudio", destination: "https://crecystudio.com", permanent: false },
      { source: "/work/tanksight", destination: "https://github.com/kkoly10/tanksight-prototype", permanent: false },
    ];
  },
};

export default nextConfig;
