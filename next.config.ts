import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withTM = require('next-transpile-modules')(['rc-util']);

type ConfigType = {
  experiments: object,
  resolve: {
    alias: Record<string,string>
  }
}


const nextConfig: NextConfig = withTM({
  reactStrictMode: true,
  transpilePackages: ['rc-picker', 'rc-pagination', 'antd'],
  webpack: (config: ConfigType, { isServer }: {isServer: boolean}) => {
    if (!isServer) {
      config.experiments = {
        ...(config.experiments || {}),
        outputModule: true, // Разрешает использование ES Modules
      };
      config.resolve.alias = {
        ...config.resolve.alias,
        'rc-picker/es/locale/common': 'rc-picker/es/locale',
      }
    }
    return config;
  },
  //Раскоментировать только для сборки FireBase
  // output: "export",
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
