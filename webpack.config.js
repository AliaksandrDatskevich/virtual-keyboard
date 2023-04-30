// npm add webpack webpack-cli webpack-dev-server --save-dev

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/styles/vars.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // npm add html-loader html-webpack-loader --save-dev
    // npm install --save-dev html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // filename: './index.html',
    }),
    // npm add style-loader sass sass-loader sass-resources-loader css-loader --save-dev
  ],
  devServer: {
    compress: true,
    port: 3000,
  },
};
