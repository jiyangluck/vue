<template>
	<div>	
		<h1>hello {{title}}</h1>
		<p>数量:{{count}}</p>
		<counter></counter>
		<p>我有{{friendsLen}}个朋友</p>
		<ul>
			<li v-for="friend in friends">{{friend}}</li>
		</ul>
	</div>
</template>

<script>
	import counter from './counter.vue';
	export default {
		computed:{
			// title:()=>store.state.title,
			// count:()=>store.state.count
			title(){
				return this.$store.state.title;
			},
			count(){
				return this.$store.state.count;
			},
			friends(){
				return this.$store.state.friends;
			},
			friendsLen(){
				return this.$store.getters.friendsLen;
			}
		},
		components:{counter}
	}
</script>

<style>
	h1{
		color:red;
	}
</style>