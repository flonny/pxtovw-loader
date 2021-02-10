# pxtovw-loader
> this is a webpack loader of pxtovw
>
> [postcss-plugin](https://www.npmjs.com/package/pxtovw-postcss)

## Usage

### webpack pxtovw-loader

```bash
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
          unitToConvert:'px', //Custom conversion unit
          viewportWidth: 1080, //Viewport width
          unitPrecision: 5, //retain decimal places
          minPixelValue: 2 // minimum conversion value
        }
      }]
    }]
  }
}
```

### postcss pxtovw-postcss

```bash
npm i postcss-loader pxtovw-postcss -D
```



> webpack.config.js

```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        }
      ]
    }
  }
```

> postcss.config.js

```javascript
  module.exports = {
    plugins: {
      "pxtovw-postcss" : {
          unitToConvert:'px', //Custom conversion unit
          viewportWidth: 1080, //Viewport width
          unitPrecision: 5, //retain decimal places
          minPixelValue: 2 // minimum conversion value
      }
    }
  }

```