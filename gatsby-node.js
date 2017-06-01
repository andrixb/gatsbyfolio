const rucksack = require('rucksack-css');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
  });

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  if (process.env.NODE_ENV === 'production') {
    config.loader('sass', {
      test: /\.s(a|c)ss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
    });
  } else {
    config.loader('sass', {
      test: /\.s(a|c)ss$/,
      loader: 'style-loader!css-loader!sass-loader',
    });
  }


  return config;
};
