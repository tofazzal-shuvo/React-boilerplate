const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
      },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public')
    }
}
// babel-core => allow to run babel from any tool like webpack
// babel-loader => teach webpack how to handle .js files
// style-loader => adds CSS to 