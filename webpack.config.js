const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Used to clear the build directory between each build.
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Used to transfer static assets (html, images, etc.) as part of the build.
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // Used to compile scss.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Used to generate an index.html file with proper hashed assets
const PackageJson = require('./package.json');  //Used to automatically load dependencies into vendor.
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //Used to obfuscate the JS for production
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Used to read CSS
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //Used to obfuscate the CSS for production


const OUTPUT_FOLDER_NAME = 'build/'
const IS_PRODUCTION_BUILD = (process.env.NODE_ENV == 'production');
module.exports = {
    entry: {
      app: path.join(__dirname, '/app/app.js'),
      vendor: Object.keys(PackageJson.dependencies) //get npm vendors deps from config
    },
    resolve: {
      modules: ['node_modules', 'app'],
      extensions: [".scss", ".vue", ".js"],
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    output: {
      filename: 'app.bundle.[hash:12].min.js',
      path: path.resolve(__dirname, OUTPUT_FOLDER_NAME)
    },
    devServer: {
      compress: true,
      contentBase: OUTPUT_FOLDER_NAME,
      port: 9001,
      watchOptions: {
        ignored: /build|node_modules/ //node_modules is ignored because watching takes too long
      }
    },
    module: {
      rules:[
        {
          test:/\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader'],
          })
        },
        {
           test: /\.js$/,
           loader: 'babel-loader',
           query: {
               presets: ['es2015']
           }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([OUTPUT_FOLDER_NAME]),
      new ExtractTextWebpackPlugin({filename:'app.bundle.[hash:12].min.css'}),
      new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.[hash:12].min.js'}),
      new HtmlWebpackPlugin({
        template: 'app/index.template.html'
      }),
      new webpack.DefinePlugin({
          'REPLACE_WITH_API_BASE_URL': '\'https://reqres.in/api\'',
      }),
      new CopyWebpackPlugin([
        {
          from: 'app/assets',
          to: 'assets'
        },
        ], {}
      ),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !IS_PRODUCTION_BUILD, // set to true if you want JS source maps,
        compress: IS_PRODUCTION_BUILD,
        mangle: IS_PRODUCTION_BUILD,
        output: {
          beautify: false
        }
      })
    ]
};
