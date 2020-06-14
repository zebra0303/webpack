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
        test: /\.m?js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'ie >= 11' ]
                  },
                  useBuiltIns: 'usage',
                  corejs:3,
                  shippedProposals: true,
                  modules: false
                }
              ]
            ],
            plugins: []
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        include: [path.resolve(__dirname, 'src')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  }
};
