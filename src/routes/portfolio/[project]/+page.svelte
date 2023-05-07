<script lang="ts">
  import Cat from '$lib/assets/cat.jpeg'
  import SvelteMarkdown from 'svelte-markdown'

  const source = `# Hello`
</script>

<main class="w-full h-full mx-auto my-auto px-4 mt-4 flex flex-col space-y-4
             md:w-3/4
           lg:w-3/5">
  <img class="h-52 object-cover rounded-2xl" src={Cat} alt="cat"/>
  <div class="w-full h-full text-light">
  <div class="w-full flex flex-col">
    <div class="w-full flex flex-row justify-between">
      <div class="flex flex-row space-x-4">
        <h1 class="font-extrabold text-2xl text-light
                  md:text-5xl">
          Dwale
        </h1>
        <ul class="pt-3 mb-2 flex flex-row space-x-2 text-sm text-dark">
          <li class="px-3 py-1 rounded-xl bg-light">C/C++</li>
          <li class="px-3 py-1 rounded-xl bg-light">CMake</li>
        </ul>
      </div>
      <a class="mt-2 transition-all
                hover:translate-x-1 hover:-translate-y-1" target="_blank" href="https://github.com/j0suetm/dwale">
        <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      </a>
    </div>
    <p class="font-semibold text-sm text-light line-clamp-3
              md:mt-2 md:text-lg md:line-clamp-2">
      An open source, efficiency focused game engine built entirely from scratch using only OpenGL and OpenAL.
    </p>
    <SvelteMarkdown {source}/>
  </div>
</main>