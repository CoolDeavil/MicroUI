const path = require("path");

// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

exports.buildPlugs = (mode) => {
    let filename_ = '';
    if(mode){
        filename_ = "./css/[name].[fullhash].min.css";
    }else{
        filename_ = "./css/[name].min.css";
    }

    return  [

        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            filename: 'index.html',
            template: './assets/template/index.html'
        }),


        new CopyPlugin({
            patterns:[
                {from: './assets/template/favicon.ico', to:path.resolve(__dirname,'../public') },
            ]
        }),

        new MiniCssExtractPlugin({
            filename: filename_
        }),
    ]
}
