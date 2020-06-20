# Webpack plugin for converting  pixel units to vw

## Use in project

```node
npm install pxtovw-loader -D
```

```javascript
module.exports = {
   // ...
   Module: {
     rule:[{
       Test: /\. css $ /,
       use: [{
         loader: "style-loader"
       }, {
         Loader: "css-loader"
       }, {
         loader: "pxtovw-loader",
         Options: {
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





- [x] configure viewport width
- [x] Customize the unit to be converted
- [x] Number of reserved digits after conversion
- [x] Configure the minimum conversion value
- [ ] Customize the converted viewport unit
- [ ] Custom ignore selectors