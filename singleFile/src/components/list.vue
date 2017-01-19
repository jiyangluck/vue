<template>
	<div class="article">
		<h3>{{name}}</h3>
		<p>{{content}}</p>
	</div>
</template>

<script>
	export default {
		props:['name','content']
	}
</script>

<style>
	article{
		border:1px solid blue;
		margin-top:10px;
	}
</style>