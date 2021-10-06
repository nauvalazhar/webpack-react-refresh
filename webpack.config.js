const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpackbar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  const plugins = []
  if(!devMode) {
    plugins.push(new MiniCssExtractPlugin());
  }
  if(devMode) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  return {
    mode: devMode ? 'development' : 'production',
    plugins: [
      new Webpackbar(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      ...plugins
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [devMode && require.resolve('react-refresh/babel')].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    entry: './src/index.js',
    output: {
      path: path.resolve(process.cwd(), 'public'),
      filename: 'app.js',
      publicPath: '/'
    },
    devServer: {
      hot: true,
      static: {
        directory: './public',
      },
      historyApiFallback: true,
    }
  }
}
