<script lang="ts">
  import { buildSvcEndpoint } from '$lib/env'
  import type { LiteArtifact } from "$lib/models"
  import Tag from '$lib/components/Tag.svelte'
  import Cta from './CTA.svelte'

  export let project: LiteArtifact
</script>

<li class="w-full flex flex-col space-y-2
            md:flex-row md:space-x-4">
  <img class="aspect-square object-cover h-28 rounded-tl-xl rounded-tr-xl
              md:h-48 md:rounded-tr-none md:rounded-bl-xl"
       src={buildSvcEndpoint("/media/" + project.header_id)} alt="cat"/>
  <div class="w-full pb-4 flex flex-col justify-between space-y-2
              lg:space-x-0">
    <div class="w-full flex flex-col">
      <div class="w-full flex flex-row justify-between">
        <h1 class="font-extrabold text-2xl text-light
                  md:text-5xl">
          {project.title.charAt(0).toUpperCase() + project.title.slice(1)}
        </h1>
        <a class="mr-2 transition-all
                  md:mt-2 md:mr-0
                  hover:translate-x-1 hover:-translate-y-1" href={project.external_link}>
          <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </a>
      </div>
      <p class="font-semibold text-sm text-light line-clamp-3
                md:mt-2 md:text-lg md:line-clamp-2">
        {project.summary}
      </p>
    </div>
    <div class="w-full flex flex-row justify-between">
      <ul class="pt-3 flex flex-row space-x-2 text-sm">
        {#each project.tags as tag}
          <Tag {tag}/>
        {/each}
      </ul>
      <Cta text="Read More" href="/portfolio/{project.title.replaceAll(" ", "-").toLowerCase()}"/>
    </div>
  </div>
</li>