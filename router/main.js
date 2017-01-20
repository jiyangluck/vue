import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import List from './components/list.vue';
import Article from './components/article.vue';
import It from './components/it.vue';
import Fun from './components/fun.vue';
import Arthome from './components/arthome.vue';

Vue.use(VueRouter);

Vue.config.debug = true;

const router = new VueRouter({
	routes:[		
		{path:'/home',component:Home},
		{path:'/list',component:List},
		{
			path:'/article/',
			component:Article,
			children:[
				{
					path:'',
					component:Arthome
				},
				{
					path:'001',
					component:Fun
				},
				{
					path:'002',
					component:It
				}
			]
		}
	]
})

const app = new Vue({
	el:'#app',
	router
})
// .$mount('#app');?????