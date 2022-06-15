const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.buildPlugs = (mode) => {
    let filename_ = '';
    if(mode){
        filename_ = "./css/[name].[fullhash].min.css";
    }else{
        filename_ = "./css/[name].min.css";
    }
    return  [
        new HtmlWebpackPlugin({
            title: 'Production',
            // template: './assets/template/plugs_demo.html',
            template: './assets/template/row.html',
            filename: 'index.html',
            inject: true,
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: filename_
        }),
    ]
}
