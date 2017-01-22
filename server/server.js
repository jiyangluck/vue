var fs = require('fs');
var path = require('path');

global.Vue = require('vue');

var layout = fs.readFileSync('./index.html','utf8');

var renderer = require('vue-server-renderer').createRenderer();

var express = require('express');

var app = express();

app.use('/public',express.static(path.resolve(__dirname,'public')));

app.get('/',function(req,res){
	renderer.renderToString(require('./public/app')(),function(e,h){
		res.send(layout.replace('<div id="app"></div>',h));
	})
})

app.listen(8080,function(){
	console.log('server is running')
})`