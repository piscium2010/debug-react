const path = require('path');
const common = require('./webpack.common');
const webpack = require('webpack');
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public')],
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        alias: {
            'react$': path.resolve(__dirname, './shim/react-shim.js'),
            'react-dom$': path.resolve(__dirname, './shim/react-dom-shim.js'),
        },
        modules: ['node_modules', path.resolve(__dirname, 'code/packages')]
        // alias: {
        //     'react$': path.resolve(__dirname, './shim/react-shim.js'),
        //     'react': path.resolve(__dirname, './code/packages/react'),
        //     'react-dom$': path.resolve(__dirname, './shim/react-dom-shim.js'),
        //     'react-dom': path.resolve(__dirname, './code/packages/react-dom'),
        //     'shared': path.resolve(__dirname, './code/packages/shared'),
        //     'react-reconciler': path.resolve(__dirname, './code/packages/react-reconciler'),
        //     'legacy-events': path.resolve(__dirname, './code/packages/legacy-events'),
        // }
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true),
            __PROFILE__: JSON.stringify(true),
            __UMD__: JSON.stringify(true),
            PRODUCTION: JSON.stringify(false),
            __EXPERIMENTAL__: JSON.stringify(true),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
