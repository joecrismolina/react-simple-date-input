const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/lib/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {      
    path: path.join(__dirname, './dist'),      
    filename: 'react-simple-date-input.js',      
    library: 'react-simple-date-input',      
    libraryTarget: 'umd',      
    publicPath: '/',      
    umdNamedDefine: true  
  },
  resolve: {      
    alias: {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  externals: {          
    "react": {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
    }  
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};