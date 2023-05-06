<script lang="ts">
  import Cat from '$lib/assets/cat.jpeg'
</script>

<div class="w-full h-full mx-auto my-auto px-4 grid gap-8
            md:mt-4 md:grid-cols-2
            lg:w-3/4">
  <div class="w-full flex flex-row space-x-4
              md:mt-4">
    <img class="aspect-square object-cover h-24 rounded-tl-xl rounded-bl-xl
                md:h-28" src={Cat} alt="cat"/>
    <div class="w-full h-min pt-1 pb-3 flex flex-col justify-between">
      <div class="w-full">
        <h2 class="font-extrabold text-lg text-light line-clamp-1">A vague introduction to Machine Learning</h2>
        <p class="text-sm text-light">7 hours ago</p>
      </div>
      <div class="w-full mt-2 flex flex-row justify-between">
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
</div>
 