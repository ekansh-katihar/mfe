const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { 
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'line_chart_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './LineChart': './src/components/LineChart',
        './LineChart2': './src/components/LineChart2',
        './LineChart3': './src/components/LineChart3',
        './LineChart4': './src/components/LineChart4',
        './LineChart5': './src/components/LineChart5',
        './LineChart6': './src/components/LineChart6',
        './LineChart7': './src/components/LineChart7',
        './LineChart8': './src/components/LineChart8',
        './LineChart9': './src/components/LineChart9',
        './LineChart10': './src/components/LineChart10',
        './LineChart11': './src/components/LineChart11',
        './LineChart12': './src/components/LineChart12',
        './LineChart13': './src/components/LineChart13',
        './LineChart14': './src/components/LineChart14',
        './LineChart15': './src/components/LineChart15',
        './LineChart16': './src/components/LineChart16',
        './LineChart17': './src/components/LineChart17',
        './LineChart18': './src/components/LineChart18',
        './LineChart19': './src/components/LineChart19',
        './LineChart20': './src/components/LineChart20',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  resolve: { extensions: ['.js', '.jsx'] },
};
