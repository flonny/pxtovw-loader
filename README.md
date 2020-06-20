# webpack 插件 用于将像素单位转换成 vw
## [english README](./README_EN.md)
## 在项目中使用

```npm
npm install pxtovw-loader -D
```

```javascript
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'pxtovw-loader',
        options: {
          unitToConvert: 'px', // 自定义转换单位
          viewportWidth: 1080, // 视口宽度
          unitPrecision: 5, // 保留小数位
          minPixelValue: 2 // 最小转换数值
        }
      }]
    }]
  }
}
```

- [x] 配置视口宽度
- [x] 自定义需要转换的单位
- [x] 转换后数值的保留位数
- [x] 配置最小转换数值
- [ ] 自定义转换后的视口单位
- [ ] 自定义忽略选择器