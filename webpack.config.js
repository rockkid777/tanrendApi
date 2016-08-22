module.exports = {
    entry: './src/test.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    }
};
