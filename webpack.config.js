const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    index: path.resolve(__dirname, "./src/pages/dashboard/index.js"),
    dashboardNoAuth: path.resolve(
      __dirname,
      "./src/pages/dashboardNoAuth/dashboardNoAuth.js"
    ),
    activities: path.resolve(__dirname, "./src/pages/activities/activities.js"),
    activityDetails: path.resolve(
      __dirname,
      "./src/pages/activityDetails/activityDetails.js"
    ),
    groupDetails: path.resolve(
      __dirname,
      "./src/pages/groupDetails/groupDetails.js"
    ),
    calendar: path.resolve(__dirname, "./src/pages/calendar/calendar.js"),
    profile: path.resolve(__dirname, "./src/pages/profile/profile.js"),
    profileSettings: path.resolve(
      __dirname,
      "./src/pages/profileSettings/profileSettings.js"
    ),
    profileChangePassword: path.resolve(
      __dirname,
      "./src/pages/profileChangePassword/profileChangePassword.js"
    ),
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
      filename: "dashboardNoAuth.html",
      inject: "body",
      template: "./src/pages/dashboardNoAuth/dashboardNoAuth.html",
      chunks: ["main", "dashboardNoAuth"],
    }),
    new HtmlWebpackPlugin({
      filename: "activities.html",
      inject: "body",
      template: "./src/pages/activities/activities.html",
      chunks: ["main", "activities"],
    }),
    new HtmlWebpackPlugin({
      filename: "activityDetails.html",
      inject: "body",
      template: "./src/pages/activityDetails/activityDetails.html",
      chunks: ["main", "activityDetails"],
    }),
    new HtmlWebpackPlugin({
      filename: "groupDetails.html",
      inject: "body",
      template: "./src/pages/groupDetails/groupDetails.html",
      chunks: ["main", "groupDetails"],
    }),
    new HtmlWebpackPlugin({
      filename: "calendar.html",
      inject: "body",
      template: "./src/pages/calendar/calendar.html",
      chunks: ["main", "calendar"],
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      inject: "body",
      template: "./src/pages/profile/profile.html",
      chunks: ["main", "profile"],
    }),
    new HtmlWebpackPlugin({
      filename: "profileSettings.html",
      inject: "body",
      template: "./src/pages/profileSettings/profileSettings.html",
      chunks: ["main", "profileSettings"],
    }),
    new HtmlWebpackPlugin({
      filename: "profileChangePassword.html",
      inject: "body",
      template: "./src/pages/profileChangePassword/profileChangePassword.html",
      chunks: ["main", "profileChangePassword"],
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
