const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.s?css$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: false,
        importLoaders: 2,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: false,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sourceMap: false,
      },
    },
  ],
};
