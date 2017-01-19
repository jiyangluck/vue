import Vue from 'vue';
import Hello from './components/hello.vue';
import store from './store.js';


Vue.config.debug = true;

new Vue({
	el:'#app',
	store,
	computed:{
		title(){
			return this.$store.state.title;
		}
	},
	components:{Hello}
})


