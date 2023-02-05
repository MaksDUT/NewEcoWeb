<script>
  import Question from "./../components/Question.svelte";
  import listScenario from './../scenario'
  import {push} from 'svelte-spa-router'
  import {total} from './../stores'

  let index = 0;


  let loadNewScenario = false;

  let selectedScenario = listScenario[0];

  const totalVideo = listScenario.length;
  total.set(totalVideo);

  function nextScenario() {
    index++;
    if (index == listScenario.length) {
      console.log("FINISH GG");
      push('/thanks')
      return;
    }
    loadNewScenario = true;
    selectedScenario = listScenario[index];
  }

  setInterval(() => {
    loadNewScenario = false;
  }, 2000);
</script>

<main class="flex flex-col items-center  min-h-screen space-y-6 bg-gray-900">
  <div class="flex w-full min-h-screen justify-center">
    {#if !loadNewScenario}
      <Question
        title={selectedScenario.title}
        presentationVideo={selectedScenario.presentationVideo}
        anwsers={selectedScenario.anwsers}
        question={selectedScenario.question}
        goodAnwserVideo={selectedScenario.goodAnwserVideo}
        badAnwserVideo={selectedScenario.badAnwserVideo}
        on:Finish={nextScenario}
      />
    {:else}
    <div class="ring">Loading
      <span></span>
    </div>
    {/if}
  </div>
</main>

<style>
  .ring
{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-family:sans-serif;
  font-size:20px;
  color:#14e422;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #14e422;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid #14e422;
  border-right:3px solid #14e422;
  border-radius:50%;
  animation:animateC 2s linear infinite;
}
span
{
  display:block;
  position:absolute;
  top:calc(50% - 2px);
  left:50%;
  width:50%;
  height:4px;
  background:transparent;
  transform-origin:left;
  animation:animate 2s linear infinite;
}
span:before
{
  content:'';
  position:absolute;
  width:16px;
  height:16px;
  border-radius:50%;
  background:#14e422;
  top:-6px;
  right:-8px;
  box-shadow:0 0 20px #14e422;
}
@keyframes animateC
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}

</style>
