<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  import type { LiteArtifact } from '$lib/models';
  import type { BlogLoadData } from './+page';

  const posts: LiteArtifact[] = [
    {
      title: 'A vague introduction to Machine Learning',
      external_link: '',
      summary: '',
      tags: ['Python', 'ML'],
      header_id: '64571f1b98f72c57cee6413b'
    }
  ]

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