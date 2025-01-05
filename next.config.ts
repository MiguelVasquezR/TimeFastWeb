import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/envio",
        permanent: true, // Cambia a false si deseas un redireccionamiento temporal
      },
    ];
  },
};

export default nextConfig;
