<script lang="ts">
  import "../app.css"
  import Hero from '$lib/assets/hero.jpg'
  import { page } from '$app/stores'
  import { fade } from 'svelte/transition'

  interface NavLink {
    name: string
    href: string
    isH: boolean
  }

  let navLinks: NavLink[] = []
  let path: string[] = []
  let pathname: string = ''
  let canReturn: boolean = false
  $: {
    path = $page.url.pathname.split('/')
    pathname = '/' + path[1];
    canReturn = path.length > 2

    navLinks = [
      {name: 'Home', href: '/', isH: false},
      {name: 'Portfolio', href: '/portfolio', isH: false},
      {name: 'Blog', href: '/blog', isH: false},
    ]

    navLinks.forEach((l: NavLink) => {
      if (l.href === pathname)
        l.isH = true
    })
  }
</script>

<img id="hero" class="fixed w-screen h-screen object-cover opacity-30 -z-10" src={Hero} alt="hero"/>

{#key path}
  <div class="fixed w-screen h-screen pb-4 overflow-y-auto"
      out:fade={{duration: 300}}>
    <header class="w-full pt-4 pb-2 flex flex-row justify-center space-x-1
                   font-semibold text-xl text-light">
      {#each navLinks as link}
        <a class="{link.isH ? 'bg-light text-dark' : 'text-light hover:underline'}
                  group px-4 py-2 rounded-2xl font-extrabold" href={link.href}>
          {link.name}
        </a>
      {/each}
    </header>

    {#if canReturn}
      <a class="group fixed left-8 mt-8 p-4 rounded-full bg-light border-light border-2
                md:mt-4
                hover:bg-transparent" href={pathname}>
        <svg class="fill-dark
                  group-hover:fill-light" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </a>
    {/if}

    <slot/>
  </div>
{/key}

<style lang="postcss">
  :global(html) {
    background-color: #222323;
    font-family: 'JetBrains Mono', monospace;
  }
</style>
