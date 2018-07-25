const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve('src')+'/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundler.js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env", "babel-preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "fonts/[name].[ext]",
                  }
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "images/[name].[ext]",
                  }
                }
            }
        ]
    }   
}