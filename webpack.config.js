var webpack=require("webpack");
var path=require("path");
var DIST_DIR=path.resolve(__dirname,"dist");
var SRC_DIR=path.resolve(__dirname,"src");
var config={
    entry:SRC_DIR+"/app/index.js",
    output:{
        path:DIST_DIR+"/app",
        filename:"bundle.js",
        publicPath:'/app/'
    },
    module:{
        rules:[
            {
                test:/\.js?/,
                use:[{loader:"babel-loader"}],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader'],
                exclude:/node_modules/
            }
        ]
    }
};
module.exports=(env, argv) => {

    if (argv.mode === 'development') {
      config.devtool = 'source-map';
      console.log("development loaded..");
    }
  
    if (argv.mode === 'production') {
        console.log("production loaded..");
    }
    return config;
  };