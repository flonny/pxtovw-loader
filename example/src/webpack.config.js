var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "pxtovw-loader",
            options: {
              unitToConvert: "px", // 自定义转换单位
              viewportWidth: 600, // 视口宽度
              unitPrecision: 5, // 保留小数位
              minPixelValue:2
            },
          },
        ],
      },
    ],
  },
};
