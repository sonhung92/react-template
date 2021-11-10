const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackPlugins = [
  // Allows remove/clean the build folder
  new CleanWebpackPlugin(),
  // Allows update react components in real time
  new HotModuleReplacementPlugin(),
  // Allows to create an index.html in our build folder
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html',
  }),
  new Dotenv({
    path: './.env', // Path to .env file (this is the default)
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: './public/favicon.ico', to: '' },
      { from: './public/manifest.json', to: '' },
      { from: './public/logo192.png', to: '' },
      { from: './public/logo512.png', to: '' },
    ],
  }),
];

if (process.env.NODE_ENV === 'production') {
  webpackPlugins.push(
    new InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 1000000 * 10,
    }),
  );
}

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/[chunkhash].chunk.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader?name=./images/[name].[ext]',
      },
      // Fonts and SVGs: Inline files
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors', // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 102400 * 5,
    maxAssetSize: 102400 * 5,
  },
  plugins: webpackPlugins,
};
