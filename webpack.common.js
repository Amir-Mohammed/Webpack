module.exports = {
  entry: {
    vendors: "./App/vendors.js",
    home: "./App/home.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
    ]
  }
}