const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    plugins: [
        new webpack.BannerPlugin({
			banner:'#!js name=foo api_version=1.0',
            raw: true,
            entryOnly: true,
	    })
	]
}
