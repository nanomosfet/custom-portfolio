/* global __dirname */
/* eslint no-undef: "error" */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    editable: './src/editable-portfolio.js',
    static: './src/portfolio.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'server/dist/')
  },
  node: { fs: 'empty' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react', 'babel-preset-env', 'stage-2'],
            plugins: ['transform-decorators-legacy', 'emotion']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader // inject CSS to page
        }, {
          loader: 'css-loader' // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ]
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      chunks: ['editable'],
      filename: 'editable.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      chunks: ['static'],
      filename: 'static.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })

  ]
}
