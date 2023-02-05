<script>
  import { link } from "svelte-spa-router";
  import listOfExample from "./../sources";
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

  <div class="text-5xl text-white text-center p-5"> Source</div>

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
                <div class="col-span-12 md:col-span-1 ">
                  <svg
                    enable-background="new 0 0 141.732 141.732"
                    class="w-8 h-8"
                    id="Livello_1"
                    version="1.1"
                    viewBox="0 0 141.732 141.732"
                    
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    ><g id="Livello_107"
                      ><path
                        d="M57.217,63.271L20.853,99.637c-4.612,4.608-7.15,10.738-7.15,17.259c0,6.524,2.541,12.653,7.151,17.261   c4.609,4.608,10.74,7.148,17.259,7.15h0.002c6.52,0,12.648-2.54,17.257-7.15L91.738,97.79c7.484-7.484,9.261-18.854,4.573-28.188   l-7.984,7.985c0.992,4.667-0.443,9.568-3.831,12.957l-37.28,37.277l-0.026-0.023c-2.652,2.316-6.001,3.579-9.527,3.579   c-3.768,0-7.295-1.453-9.937-4.092c-2.681-2.68-4.13-6.259-4.093-10.078c0.036-3.476,1.301-6.773,3.584-9.39l-0.021-0.02   l0.511-0.515c0.067-0.071,0.137-0.144,0.206-0.211c0.021-0.021,0.043-0.044,0.064-0.062l0.123-0.125l36.364-36.366   c2.676-2.673,6.23-4.144,10.008-4.144c0.977,0,1.947,0.101,2.899,0.298l7.993-7.995c-3.36-1.676-7.097-2.554-10.889-2.554   C67.957,56.124,61.827,58.663,57.217,63.271 M127.809,24.337c0-6.52-2.541-12.65-7.15-17.258c-4.61-4.613-10.74-7.151-17.261-7.151   c-6.519,0-12.648,2.539-17.257,7.151L49.774,43.442c-7.479,7.478-9.26,18.84-4.585,28.17l7.646-7.646   c-0.877-4.368,0.358-8.964,3.315-12.356l-0.021-0.022l0.502-0.507c0.064-0.067,0.134-0.138,0.201-0.206   c0.021-0.02,0.04-0.04,0.062-0.06l0.126-0.127l36.363-36.364c2.675-2.675,6.231-4.147,10.014-4.147   c3.784,0,7.339,1.472,10.014,4.147c5.522,5.521,5.522,14.51,0,20.027L76.138,71.629l-0.026-0.026   c-2.656,2.317-5.999,3.581-9.526,3.581c-0.951,0-1.891-0.094-2.814-0.278l-7.645,7.645c3.369,1.681,7.107,2.563,10.907,2.563   c6.523,0,12.652-2.539,17.261-7.148l36.365-36.365C125.27,36.988,127.809,30.859,127.809,24.337"
                      /></g
                    ><g id="Livello_1_1_" /></svg
                  >
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
