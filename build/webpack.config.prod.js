const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'meeui': './src/index.js',
    'meeui.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'MeeUI',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: path.posix.join('static', '[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'meeui.css'
    })
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/,
        sourceMap: false
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
};