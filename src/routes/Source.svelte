<script>
  import { link } from "svelte-spa-router";
  import listOfExample from "./../sources";
  import GoLinkExternal from "svelte-icons/go/GoLinkExternal.svelte";
  import MdHome from 'svelte-icons/md/MdHome.svelte'
  /* 
  const listOfExample = [
    {
      scenario: "Scenario 1",
      links: [
        {
          title:"link1",
          link:"https://www.google.com"
      },
      {
          title:"link2",
          link:"https://www.google.com"
      },
      {
          title:"link3",
          link:"https://www.google.com"
      },
      ]
    },
  ]  
*/
</script>

<!-- This example requires Tailwind CSS v3.0+ -->
<div class="isolate bg-gray-900 h-min-screen">
  <div
    class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
  >
    <svg
      class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
        fill-opacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9089FC" />
          <stop offset="1" stop-color="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <a
  href="/"
  use:link
  class="fixed rounded-md bg-transparent px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
  >
  <div class="m-8 h-8"><MdHome></MdHome></div>
  </a>


  <div class="text-5xl text-white text-center p-5">Source</div>


  {#each listOfExample as { scenario, links }}
    <!-- This is an example component -->
    <div class="flex items-center justify-center">
      <div class="rounded-xl border p-3 shadow-md w-8/12 bg-slate-900">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div class="text-lg font-bold text-white">{scenario}</div>
          </div>
        </div>

        <div class="mt-2 mb-3">
          {#each links as { title, link }}
            <div class="flex flex-col gap-4 items-center justify-center">
              <!-- Card 1 -->
              <a
                class="rounded-md w-10/12 m-2 grid grid-cols-12 bg-gray-100 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
                href={link}
              >
                <!-- Icon -->
                <div class="col-span-12 md:col-span-1 h-8 w-8">
                  <GoLinkExternal />
                </div>

                <!-- Title -->
                <div class="col-span-11 xl:-ml-5">
                  <p class="text-gray-700 font-semibold">
                    {title}
                  </p>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  body {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }
</style>
