<script lang="ts">
  import Reader from "$lib/components/Reader.svelte";
  import type { ProjectLoadData } from "./+page";

  export let data: ProjectLoadData
</script>

<main class="w-full mx-auto my-auto px-4 mt-4 flex flex-col space-y-4
             md:w-3/4
             lg:w-3/5">
  {#await data.project}
    <p class="text-white">Loading...</p>
  {:then project} 
    <Reader artifact={project}/>
  {/await}
</main>