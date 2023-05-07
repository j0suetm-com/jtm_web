<script lang="ts">
  import Reader from "$lib/components/Reader.svelte";
  import type { PostLoadData } from "./+page";

  export let data: PostLoadData
</script>

<main class="w-full mx-auto my-auto px-4 mt-4 flex flex-col space-y-4
             md:w-3/4
             lg:w-3/5">
  {#await data.post}
    <p class="text-white">Loading...</p>
  {:then post} 
    <Reader artifact={post}/>
  {/await}
</main>