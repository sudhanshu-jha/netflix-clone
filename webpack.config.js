const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: process.env.NODE_ENV === 'production' ? '/netflix-clone/' : '/',
    clean: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass-embedded'),
              api: 'modern',
              sassOptions: {
                silenceDeprecations: ['legacy-js-api']
              }
            }
          }
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    open: true,
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      hash: true
    }),
    ...(process.env.NODE_ENV === 'production' ? [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ] : [])
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}