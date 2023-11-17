<script>
	export let data
</script>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href='/blog/{post.slug}' class="title">{post.title}</a>
				<p class="date">{(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
