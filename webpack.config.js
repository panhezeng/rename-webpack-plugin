module.exports = {
  output: {
    filename: 'rename-webpack-plugin.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'RenameWebpackPlugin',
    libraryExport: 'RenameWebpackPlugin'
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
