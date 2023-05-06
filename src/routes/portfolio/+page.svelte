<script lang="ts">
  import Cat from '$lib/assets/cat.jpeg'
</script>

<ul class="w-full h-full mx-auto my-auto px-4 mt-4 flex flex-col space-y-6
           md:w-3/4 md:mt-8 md:space-y-10
           lg:w-3/5">
  <li class="w-full flex flex-col space-y-2
             md:flex-row md:space-x-4">
    <img class="aspect-square object-cover h-28 rounded-tl-xl rounded-tr-xl
                md:h-48 md:rounded-tr-none md:rounded-bl-xl" src={Cat} alt="cat"/>
    <div class="w-full pb-4 flex flex-col justify-between space-y-2
                lg:space-x-0">
      <div class="w-full flex flex-col">
        <div class="w-full flex flex-row justify-between">
          <h1 class="font-extrabold text-2xl text-light
                    md:text-5xl">
            Dwale
          </h1>
          <a class="mr-2 transition-all
                    md:mt-2 md:mr-0
                    hover:translate-x-1 hover:-translate-y-1" href="https://github.com/j0suetm/dwale">
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
      </div>
      <div class="w-full flex flex-row justify-between">
        <ul class="pt-3 flex flex-row space-x-2 text-sm">
          <li class="px-3 py-1 rounded-xl bg-light">C/C++</li>
          <li class="px-3 py-1 rounded-xl bg-light">CMake</li>
        </ul>
        <a class="px-4 py-2 flex flex-row font-semibold text-sm bg-light rounded-xl border-2
                  hover:bg-transparent hover:text-light hover:border-light"
                  href="/portfolio/dwale">
          <svg class="pt-1 mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
          Read More
        </a>
      </div>
    </div>
  </li>
</ul>