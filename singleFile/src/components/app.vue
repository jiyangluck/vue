<template>
	<div>
		<h1>hello world {{title}}</h1>
		<div v-for="art in article">
			<news 
				v-bind:name="art.name"
				v-bind:content="art.content"
			></news>
		</div>
	</div>
</template>

<script>
	import news from './list.vue';
	export default {
		data(){
			return {
				title:'mydemo',
				article:[
					{
						name:'新闻1',
						content:'内容123内容123内容123内容123'
					},
					{
						name:'新闻2',
						content:'内容123内容123内容123内容123'
					},
					{
						name:'新闻3',
						content:'内容123内容123内容123内容123'
					},
					{
						name:'新闻4',
						content:'内容123内容123内容123内容123'
					},
					{
						name:'新闻5',
						content:'内容123内容123内容123内容123'
					}
				]
			}
		},
		components: {news}
	}
</script>

<style>
	h1{
		color:red;
	}
</style>