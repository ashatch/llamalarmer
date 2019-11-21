var path = require("path");
var pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
var phaser = path.join(pathToPhaser, "dist/phaser.js");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" },
      { test: /phaser\.js$/, loader: "expose-loader?Phaser" }
    ]
  },  
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    publicPath: "/dist/",
    host: "127.0.0.1",
    port: 8080,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      phaser: phaser
    }
  }
};
