const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
        include: path.resolve(__dirname, 'src'),
        use: ['file-loader?name=assets/[name].[ext]']
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['url-loader?limit=8192&name=assets/[name].[ext]']
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsc']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack-react-template',
      template: './public/index.html',
      inject: 'body',
      chunks: ['index', 'styles']
    }),
    new MiniCssExtractPlugin({
      // JS中的CSS -> 单独的文件中
      filename: '[id].[contenthash:12].css',
      chunkFilename: '[id].[contenthash:12].css'
    })
  ]
};
