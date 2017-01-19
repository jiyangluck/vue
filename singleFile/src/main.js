import Vue from 'vue';
import Test from './components/app.vue';

Vue.config.debug = true;

new Vue({
	el:'#app',
	components: {Test}
});

// new Vue(app)

