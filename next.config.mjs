/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '</.well-known/api-catalog>; rel="api-catalog", </auth.md>; rel="describedby", </.well-known/agent-skills/index.json>; rel="describedby"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
