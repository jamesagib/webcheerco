/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/6pm", destination: "/6pm/index.html" },
      { source: "/6pm/privacypolicy", destination: "/6pm/privacypolicy.html" },
      { source: "/6pm/support", destination: "/6pm/support.html" },
      { source: "/DigitalSpoons", destination: "/DigitalSpoons/index.html" },
      { source: "/agency", destination: "/agency/index.html" },
      { source: "/remra", destination: "/remra/index.html" },
      { source: "/HydrateAI", destination: "/HydrateAI/HydrateAI.html" },
      { source: "/WaterAI", destination: "/WaterAI/WaterAI.html" },
    ];
  },
};

export default nextConfig;
