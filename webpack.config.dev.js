const path = require('path');

module.exports = {
    entry: './src/index.js', // Your entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        globalObject: 'this', // Ensures compatibility in both Node.js and browsers
        library: 'module-adaptor', // Replace with your library name
        libraryTarget: 'umd', // Export as a UMD module for compatibility
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Match JavaScript files
                loader: 'babel-loader',
                exclude: /node_modules/, // Exclude all node_modules by default
                include: [
                    path.resolve(__dirname, 'src'), // Include your source code
                    path.resolve(__dirname, 'node_modules/url-join'), // Include the specific module
                    path.resolve(__dirname, 'node_modules/mime'), // Include the specific module
                ],
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: '> 0.25%, not dead', // Adjust target browsers as needed
                            },
                        ],
                    ],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'], // Resolve these extensions
    },
    mode: 'development', // Use "production" or "development"
    devtool: 'source-map', // Generate source maps for easier debugging
};
