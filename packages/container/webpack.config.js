const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const deps = require("./package.json").dependencies;
require("dotenv").config({ path: "./.env" });

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.ts",
    mode: process.env.NODE_ENV || "development",
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
      allowedHosts: 'all',
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: 'auto',
      chunkFilename: 'js/[id].[contenthash].js',
      filename: 'js/[name].[contenthash].js',
      clean: true,
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
              options: {
                name: '[path][name].[ext]',
                context: path.resolve(__dirname, "src/"),
                publicPath: '../',
                useRelativePaths: true,
              }
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
      new webpack.EnvironmentPlugin({}),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          shop: isProduction ? process.env.PROD_SHOP : process.env.DEV_SHOP,
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
        template: "./public/index.html",
        favicon: "./public/favicon.ico"
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "src/assets", to: "assets" },
        ],
      }),
    ],
  };
};
