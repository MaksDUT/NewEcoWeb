<script>
  import Question from "./../components/Question.svelte";
  import listScenario from './../scenario'

  let index = 0;
  let score = 0;

  let loadNewScenario = false;

  let selectedScenario = listScenario[0];

  function nextScenario(event) {
    event.detail ? score++ : score;
    index++;
    if (index == listScenario.length) {
      console.log("FINISH GG");
      
      return;
    }
    loadNewScenario = true;
    selectedScenario = listScenario[index];
  }

  setInterval(() => {
    loadNewScenario = false;
  }, 1000);
</script>

<main class="flex flex-col items-center  min-h-screen space-y-6 bg-gray-900">
  <div class="flex w-full min-h-screen justify-center">
    {#if !loadNewScenario}
      <Question
        title={selectedScenario.title}
        presentationVideo={selectedScenario.presentationVideo}
        anwsers={selectedScenario.anwsers}
        question={selectedScenario.question}
        anwserVideo={selectedScenario.anwserVideo}
        on:Finish={(i) => nextScenario(i)}
      />
    {:else}
      <div>WAITING</div>
    {/if}
  </div>
</main>

<style>
  .btn {
    @apply font-semibold py-2 px-4 rounded-md text-blue-500 border border-current;
  }

  .btn:hover,
  .btn:focus {
    @apply text-blue-200;
  }
</style>
