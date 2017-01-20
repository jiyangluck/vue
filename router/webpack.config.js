module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query:{
                presets:['es2015']
            }
        }]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css'
        }
    },
    //https://vuejs.org/v2/guide/installation.html#Standalone-vs-Runtime-only-Build
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
