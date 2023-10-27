const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4000,
    hot: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'app',
      remotes: {
        auth: 'auth@[authUrl]/remoteEntry.js',
        lib: 'lib@[libUrl]/remoteEntry.js',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: '^17.0.2',
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: '^17.0.2',
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
}
