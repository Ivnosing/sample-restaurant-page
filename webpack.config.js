const path = require('path');
const env = process.env.WEBPACK_MODE;

module.exports = {
  mode: env || 'development',
  entry: ['./src/ts/index.ts', './src/scss/styles.scss'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].min.css' }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  }
}