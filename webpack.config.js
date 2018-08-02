module.exports = {
  output: {
    filename: 'rename-webpack-plugin.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'RenameWebpackPlugin',
    umdNamedDefine: true
  },
  externals: {
    'change-case': 'change-case'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
