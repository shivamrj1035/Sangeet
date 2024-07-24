module.exports = {
  // other configurations...
  module: {
    rules: [
      // other rules...
      {
        test: /\.js$/,
        exclude: /node_modules\/stylis-plugin-rtl/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  ignoreWarnings: [
    (warning) =>
      warning.module && warning.module.resource.includes("node_modules/stylis-plugin-rtl"),
  ],
};
