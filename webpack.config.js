const path = require('path');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
module.exports = (env)=>{
  console.log('env:', env);
  const isProduction = env === 'production';
  // const CSSExtract = new ExtracTextPlugin('styles.css');
  return {
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
        }, 
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              
            },
            'css-loader', 'scss-loader'
          ]
        }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      }),
    ],
    devtool: isProduction  ? 'source-map' : 'cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public')
    }
}
}
// babel-core => allow to run babel from any tool like webpack
// babel-loader => teach webpack how to handle .js files
// style-loader => adds CSS to 