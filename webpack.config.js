const path = require('path');

module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

module.exports = {
    entry: './app/assets/scripts/App',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: "App.js"
    }
}