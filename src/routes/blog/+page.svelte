<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  import type { BlogLoadData } from './+page';

  export let data: BlogLoadData
</script>

<ul class="w-full mx-auto my-auto px-4 grid gap-8
            md:mt-4 md:grid-cols-2
            lg:w-3/4">
  {#await data.posts}
    <p class="text-light">Loading...</p>
  {:then posts} 
    {#each posts as post}
      <PostCard {post}/>
    {/each}
  {/await}
</ul>