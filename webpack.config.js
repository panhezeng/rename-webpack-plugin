module.exports = {
  output: {
    filename: 'rename-webpack-plugin.min.js',
    libraryTarget: 'commonjs2',
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
