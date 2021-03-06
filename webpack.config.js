module.exports = {
  entry: {
    'all.webpack': './ng2-material/webpack_all.js',
    'all.webpack.styles': './ng2-material/webpack_styles.js'
  },
  output: {
    // We use CommonJS because of Meteor 1.3 specification that uses it
    libraryTarget: 'commonjs',
    path: './out/',
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.css', '.js']
  },
  externals: [
    /angular2\/.*/
  ],
  module: {
    loaders: [
      {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.ttf/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.eot/,
        loader: 'url?limit=100000'
      }
    ]
  }
};
