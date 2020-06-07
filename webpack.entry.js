module.exports = {
  main: {
    import: ['./src/js/main.js', './src/css/main.scss'], 
    filename: './js/[name].bundle.js'
  },
  list: {
    import: ['./src/js/lib/list.js', './src/css/lib/list.scss'], 
    filename: './js/lib/[name].bundle.js'
  },
};