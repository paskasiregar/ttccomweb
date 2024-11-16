const path = require("path");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/images",
            publicPath: "/_next/static/images",
          },
        },
      ],
    });
    return config;
  },
};
