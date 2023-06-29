const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
require("dotenv").config({ path: "./.env" });

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  target: 'web',
  mode: process.env.NODE_ENV || "development",
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'auto',
    chunkFilename: 'js/[id].[contenthash].js',
    filename: 'js/[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3001,
    open: true,
    open: ['/shop'],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader", // 1. Turns sass into css
        ],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              { targets: { browsers: "last 2 versions" } },
            ],
            "@babel/preset-typescript",
            ["@babel/preset-react", { "runtime": "automatic" }],
          ],
          plugins: [
            "react-hot-loader/babel",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            [
              "@babel/plugin-proposal-private-property-in-object",
              { loose: true },
            ],
            ["@babel/plugin-proposal-private-methods", { loose: true }],
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ ...process.env }),
    new ModuleFederationPlugin({
      name: "shop",
      filename: "js/remoteEntry.js",
      exposes: {
        "./CounterAppOne": "./src/components/CounterAppOne",
        "./Shop": "./src/App",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'), // "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
  ],
};
