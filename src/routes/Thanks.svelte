<script>
    import {link} from 'svelte-spa-router'
    import {score,total} from './../stores'

    let scoreFinal;
    let totals;

    score.subscribe(value => {
		scoreFinal = value;
	});

    total.subscribe(value => {
		totals = value;
	});
    
  </script>
  
  
  <!-- This example requires Tailwind CSS v3.0+ -->
  <div class="isolate bg-gray-900 h-screen">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>  
        
      <main>
        <div class="relative px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <a  href="https://github.com/MaksDUT/NewEcoWeb" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Github
              </a>  


            </div>
            <div class="text-center">
              
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Merci d'avoir participé</h1>
              <p class="mt-6 text-lg leading-8 text-gray-200">Votre score est de {scoreFinal}/{totals}</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" use:link class="rounded-md bg-slate-600 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Menu Principal</a>
                <a href="/sources" use:link class="rounded-md bg-slate-600 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sources</a>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  
    <style>
      body{
        --tw-bg-opacity: 1;
      background-color: rgb(17 24 39 / var(--tw-bg-opacity));
      }
    </style>