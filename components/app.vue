<template>
	<div>
		<h1>我是一个组件,我的名字叫{{name}}</h1>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name:'hello'
			}
		}
	}
</script>

<style>
	h1{
		color:red;
	}
</style>