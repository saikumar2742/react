module.exports = {
    entry: "./main.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react',"babel-preset-env"],
                    plugins: ['babel-plugin-transform-object-rest-spread']
                }
            },
            { test: /\.css$/, loader: ["style-loader","css-loader"] }
        ]
    },

};