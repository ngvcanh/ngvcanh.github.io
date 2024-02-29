import nextMDX from "@next/mdx";
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // webpack5: true,
  // future: {
  //   webpack5: true
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};

export default withMDX(nextConfig);
