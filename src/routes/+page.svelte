<script lang="ts">
  import Cat from '$lib/assets/cat.jpeg'
</script>

<main class="w-full mx-auto my-auto px-4 mt-20 fade-up
             sm:w-2/3 sm:mt-26
             md:w-3/5
             lg:w-2/5">
  <h1 class="font-bold text-7xl text-left text-light
             md:text-center">HI.</h1>
  <p class="mt-3 font-semibold text-lg text-left text-light leading-6">
    I’m Josué Teodoro Moreira, a Software Engineer based in Brazil, specializing in Backend, DevOps and Data Science.
  </p>

  <div class="w-full mt-5 flex flex-row justify-center space-x-4">
    <a class="hover:opacity-80" href="https://github.com/j0suetm">
      <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    </a>
    <a class="hover:opacity-80" href="https://linkedin.com/in/josue-teodoro-moreira">
      <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    </a>
    <a class="hover:opacity-80" href="https://twitter.com/j0suetm">
      <svg class="fill-light" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
      </svg>
    </a>
  </div>
</main>

<footer class="fixed w-full bottom-2 mx-auto p-4
               md:w-2/3 md:pb-10 md:bottom-0 md:left-0 md:right-0
               lg:w-1/2">
  <p class="font-semibold text-md text-light">Recent blog post:</p>
  <div class="w-full mt-2 flex flex-row space-x-4
              md:mt-4">
    <img class="aspect-square object-cover h-24 rounded-tl-xl rounded-bl-xl
                md:h-28" src={Cat} alt="cat"/>
    <div class="w-full pt-1 pb-3 flex flex-col justify-between">
      <div class="w-full">
        <h2 class="font-extrabold text-lg text-light line-clamp-1">A vague introduction to Machine Learning</h2>
        <p class="text-sm text-light">7 hours ago</p>
      </div>
      <div class="w-full flex flex-row justify-between">
        <ul class="h-min pt-3 flex flex-row space-x-2">
          <li class="px-3 py-1 text-sm rounded-xl bg-light">Python</li>
          <li class="px-3 py-1 text-sm rounded-xl bg-light">ML</li>
        </ul>
        <a class="px-4 py-2 flex flex-row font-semibold text-sm bg-light rounded-xl border-2
                  hover:bg-transparent hover:text-light hover:border-light"
                  href="/blog/aaaa">
          <svg class="pt-1 mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
          Read
        </a>
      </div>
    </div>
  </div>
</footer>

<span class="fixed w-full bottom-2 text-xs text-center text-light">Copyright © Josué Teodoro Moreira</span>