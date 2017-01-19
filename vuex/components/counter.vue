<template>
	<div>
		<button v-on:click="sub">-</button>
		<span>{{count}}</span>
		<button v-on:click="add">+</button>
		<button v-on:click="addFriend">添加朋友</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				//count:store.state.count
			}
		},
		computed:{
			count(){
				return this.$store.state.count;
			}
		},
		methods:{
			add(){
				this.$store.commit('add');
			},
			sub(){
				this.$store.commit('sub');
			},
			addFriend(){
				this.$store.commit('addFriend','钢铁侠');
			}
		}
	}	
</script>