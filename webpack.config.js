const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    mode: "none",
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        options: {
          presets: [
          '@babel/preset-env',
          '@babel/preset-react'
          ]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }, {
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
         {
           loader: 'css-loader',
           options: {
              sourceMap: true
            }
         },
         {
           loader: 'sass-loader',
           options: {
              sourceMap: true
             }
         }
     ]
    }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
