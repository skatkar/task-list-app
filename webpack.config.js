const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules :[{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/, //With this, files having extension as css as well as scss will be scanned
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};

