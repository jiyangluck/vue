import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		title:'demo',
		count:0,
		friends:['超人','蝙蝠侠','美国队长','绿巨人']
	},
	getters:{
		friendsLen(state){
			return state.friends.length;
		}
	},
	mutations:{
		add:state=>++state.count,
		sub:state=>--state.count,
		addFriend(state,fri){
			state.friends.push(fri);
		}
	}
})

export default store;