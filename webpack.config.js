const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: distPath,
    filename: 'index.js'
  },
  devServer: {
    contentBase: distPath,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')],
          }
        }
      }
    ]
  }
};
