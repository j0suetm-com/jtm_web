<script lang="ts">
  import type { Artifact } from "$lib/models"
  import Tag from '$lib/components/Tag.svelte'
  import SvelteMarkdown from 'svelte-markdown'
  import { buildSvcEndpoint } from '$lib/env'

  export let artifact: Artifact
</script>

<img class="h-52 object-cover rounded-2xl" src={buildSvcEndpoint("/media/" + artifact.header_id)} alt="cat"/>
<div class="w-full flex flex-col text-white">
  <div class="w-full flex flex-row justify-between">
    <div class="flex flex-row space-x-4">
      <h1 class="font-extrabold text-2xl text-light
                 md:text-5xl">
        {artifact.title.charAt(0).toUpperCase() + artifact.title.slice(1)}
      </h1>
      <ul class="mb-2 flex flex-row space-x-2 text-sm text-dark
                 md:pt-3">
        {#each artifact.tags as tag}
          <Tag {tag}/>
        {/each}
      </ul>
    </div>
    <a class="transition-all
              md:pt-1
              hover:translate-x-1 hover:-translate-y-1" target="_blank" href="https://github.com/j0suetm/dwale">
      <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg>
    </a>
  </div>
  <p class="font-semibold text-sm text-light
            md:mt-2 md:text-lg">
    {artifact.summary}
  </p>
  <div id="content" class="w-full mt-2 space-y-2 font-semibold text-sm text-light">
    <SvelteMarkdown source={atob(artifact.content)}/>
  </div>
</div>
