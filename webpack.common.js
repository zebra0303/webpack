const path = require('path');
const entry = require('./webpack.entry.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: './js/[name].bundle.js',
    chunkFilename: './js/[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src/js')],
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        include: [path.resolve(__dirname, 'src/css')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    /*
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            console.debug(module.identifier().split('/'));
            const moduleName = module.identifier().split('/').reduceRight(item => item).replace(/\.js$/, '');
            return `./vendor/${moduleName}`;
          },
          chunks: 'all'
        }
      }
    },
    */
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  }
};
