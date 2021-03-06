const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    name: 'server',
    entry: {
        server: ['regenerator-runtime/runtime', path.join(__dirname, '../server/index.js')]
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        alias: {
            RESOLVE_SERVER_CONFIG: path.resolve(
                __dirname,
                path.join(process.cwd(), './resolve.server.config.js')
            )
        }
    },
    output: {
        path: path.join(process.cwd(), './dist/server'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: [['es2015', { modules: false }], 'stage-0', 'react']
                        }
                    }
                ],
                exclude: [/node_modules/]
            }
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
