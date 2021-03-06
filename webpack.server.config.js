module.exports = {
  entry: [
    './src/server/index.ts',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'server.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts'] }
    ]
  },
  ts: {
    compiler: 'typescript'
  },
  plugins: [
  ],
  devtool: "#source-map"
}
