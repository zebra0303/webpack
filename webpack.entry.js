/*
 webpack 5.0 entry list spec
module.exports = {
  main: {
    import: ['core-js', 'regenerator-runtime/runtime', './src/js/main.js', './src/css/main.scss'], 
    filename: './js/[name].bundle.js'
  },
  list: {
    import: ['core-js', 'regenerator-runtime/runtime', './src/js/lib/list.js', './src/css/lib/list.scss'], 
    filename: './js/lib/[name].bundle.js'
  },
  ie: {
    import: ['./src/js/ie.js', './src/css/ie.scss'], 
    filename: './js/[name].bundle.js'
  },
};
*/

module.exports = {
  'polyfill/fetch': ['whatwg-fetch'],
  'main': ['./src/js/main.js', './src/css/main.scss'],
  'polyfill': ['./src/js/polyfill.js', './src/css/polyfill.scss'],
  'dynamic': ['core-js/modules/es.array.iterator', './src/js/dynamic.js', './src/css/dynamic.scss']
};