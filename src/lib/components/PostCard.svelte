<script lang="ts">
  import { buildSvcEndpoint } from '$lib/env'
  import type { LiteArtifact } from '$lib/models'
  import Tag from '$lib/components/Tag.svelte'
  import Cta from '$lib/components/CTA.svelte'

  import { timerel } from 'timerel'

  export let post: LiteArtifact
</script>

<div class="w-full mt-2 flex flex-row space-x-4
              md:mt-4">
  <img class="aspect-square object-cover h-24 rounded-tl-xl rounded-bl-xl
              md:h-28" src={buildSvcEndpoint("/media/" + post.header_id)} alt="cat"/>
  <div class="w-full pt-1 pb-3 flex flex-col justify-between">
    <div class="w-full">
      <h2 class="font-extrabold text-lg text-light line-clamp-1">
        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </h2>
      <p class="text-sm text-light">
        {timerel(new Date(post.created_at))}
      </p>
    </div>
    <div class="w-full flex flex-row justify-between">
      <ul class="h-min pt-1 flex flex-row space-x-2">
        {#each post.tags as tag}
          <Tag {tag}/>
        {/each}
      </ul>
      <Cta text="Read" href="/blog/{post.title.replaceAll(" ", "-").toLowerCase()}"/>
    </div>
  </div>
</div>