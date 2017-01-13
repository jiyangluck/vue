<template>
	<h1>hello {{str}}</h1>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				str:'world'
			}
		}
	}
</script>

<style>
	h1{
		color:red;
	}
</style>