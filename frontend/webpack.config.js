const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },

    mode: "development",

    // Enable sourcemaps for debugging webpack"s output.

    resolve: {
      // Add ".ts" and ".tsx" as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [htmlPlugin],

    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    },

  };
