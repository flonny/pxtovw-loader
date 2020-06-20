# px to vw

```javascript
npm install pxtovw-loader
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
          unitToConvert: 'px',
          viewportWidth: 1080,
          unitPrecision: 5,
        }
      }]
    }]
  }
}
```
