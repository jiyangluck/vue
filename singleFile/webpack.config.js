module.exports = {
	entry:'./index.js',
	output:{
		filename:'./bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.js$/,
				loader:'babel?presets=es2015',
				exclude:/node_modules/
			}
		]
	}
}

