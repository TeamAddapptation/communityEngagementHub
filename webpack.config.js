const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    index: path.resolve(__dirname, "./src/pages/dashboard/index.js"),
    activities: path.resolve(__dirname, "./src/pages/activities/activities.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./src/pages/dashboard/index.html",
      chunks: ["main", "index"],
      title: "Addapptation || Community Engagement Hub",
    }),
    new HtmlWebpackPlugin({
      filename: "activities.html",
      inject: "body",
      template: "./src/pages/activities/activities.html",
      chunks: ["main", "activities"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "assets/resources",
      },
    ],
  },
};
