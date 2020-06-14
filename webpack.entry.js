/*
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
  main: ['core-js/modules/es.array.iterator', './src/js/main.js', './src/css/main.scss'],
  ie: ['whatwg-fetch', './src/js/ie.js', './src/css/ie.scss'],
  'lib/list': ['core-js/modules/es.array.iterator', './src/js/lib/list.js', './src/css/lib/list.scss']
};