<template>
	<div>
		<h1>文章 {{$route.params.id}}</h1>
		<ul>
			<li v-for="article in articles" >
				<router-link
					v-bind:to='/article/+article.url'>{{article.title}}
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				articles:[
					{
						title:'文章一',
						url:'001'
					},
					{
						title:'文章二',
						url:'002'
					},
					{
						title:'文章三',
						url:'003'
					},
					{
						title:'文章四',
						url:'004'
					},
					{
						title:'文章五',
						url:'005'
					}
				]
			}
		}
	}
</script>