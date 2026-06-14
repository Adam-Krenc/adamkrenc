import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Starý realitní obsah → domovská stránka (301)
      { source: "/reality", destination: "/", permanent: true },
      { source: "/reality/:slug*", destination: "/", permanent: true },
      // Starý blog (realitní články) → domovská stránka (301)
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      // Realitní pronájmy → domovská stránka (301)
      { source: "/pronajem/:slug*", destination: "/", permanent: true },
      // Bývalé samostatné stránky → odpovídající sekce / projekt (301)
      { source: "/smartapky", destination: "/#projects", permanent: true },
      { source: "/kontakt", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
