<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import type { PortfolioLoadData } from './+page'

  export let data: PortfolioLoadData
</script>

<ul class="w-full mx-auto my-auto px-4 mt-4 flex flex-col space-y-6
           md:w-3/4 md:mt-8 md:space-y-10
           lg:w-3/5">
  {#await data.projects}
    <p class="text-white">Loading...</p>
  {:then projects}
    {#each projects as project}
      <ProjectCard {project}/>
    {/each}
  {/await}
</ul>