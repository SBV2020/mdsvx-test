<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<article class="blog">
  <!-- Title -->
  <hgroup>
    <h1>{data.title}</h1>
    <p>Published at {(data.date)}</p>
  </hgroup>


  <!-- Tags -->
  <div class="tags">
    <p class=" flex gap-1.5">Tags:
      {#each data.categories as category}
        <a href="/blog?categories={category}" class="text-blue-600 underline">&num;{category}</a>
      {/each}
    </p>
  </div>

  <div class="content">
    <svelte:component this={data.content}/>
  </div>
</article>



