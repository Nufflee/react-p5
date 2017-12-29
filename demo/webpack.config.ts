import * as path from 'path'
import * as webpack from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import {NewModule} from "webpack";

export default function webpackConfig() {
  const config: webpack.Configuration = <webpack.Configuration>{
    entry: [
      path.join(__dirname, 'src', 'main.tsx'),
      'react-hot-loader/patch'
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          use: [
            'react-hot-loader/webpack',
            {
              loader: 'ts-loader',
              query: {
                compilerOptions: {
                  sourceMap: true,
                  module: 'esnext'
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {test: /\.(png|jpe?g)$/, use: 'file-loader'}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'react-p5 demo'
      })
    ]
  }

  for (const rule of (config.module as NewModule).rules) {
    rule.exclude = /(node_modules|tests)/
  }

  return config
}