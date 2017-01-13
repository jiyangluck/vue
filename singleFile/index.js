import Vue from 'vue';
import Helloworld from './helloworld.vue';

Vue.config.debug = true;



Window.onload = function(){
	Vue.component('hello',{
		template:'<h1>hello world</h1>'
	});
	
	new Vue({
		el:'#app',
		components:{
			'my-component':Helloworld
		}
	})
}