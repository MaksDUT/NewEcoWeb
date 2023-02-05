<script>
  import Card from "./Card.svelte";
  import { onMount,createEventDispatcher } from "svelte";
  import {score} from './../stores'

  import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte'
  import MdReplay from 'svelte-icons/md/MdReplay.svelte'

  const event = createEventDispatcher();


  // export variable
  export let presentationVideo;
  export let goodAnwserVideo;
  export let badAnwserVideo;
  export let question;
  export let anwsers;
  export let title;

let anwserVideo;
  //video show 
  let src;

  // These values are bound to properties of the video
  let time = 0;
  let duration;
  let paused = true;
  let volume=0.5;

  let showControls = false;
	let showControlsTimeout;

  //test with option
  //let anwsers = [{response:'La réponse A',isAnwser: false},{response:'La réponse B',isAnwser: false},{response:'La réponse C',isAnwser: false},{response:'La réponse D',isAnwser: true}]
  let isStarted = false;

  const States = {
    presentation: 0,
    question: 1,
    showAnwser: 2,
    response: 3,
    finish: 4,
  };
  //state of the question
  let state = States.presentation;


  //final anwser screen
  const messageWin = "Bonne réponse !"
  const messageLose = "Mauvaise réponse !"
  let messageShow = messageWin;
  let goodAnwser;


  $: show = time > 5;
  $: show ? pause2second() : "";

  function handleMove() {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;
	}


  function startVideo() {
    
    paused = !paused;
    isStarted = true;
  }

  function restardVideo() {
    //state = States.presentation;
    time = 0;
    isStarted = false;
    paused = true;
  }

  function pause2second() {
    paused = true;
    switch (state) {
      case States.presentation:
        state = States.question;
        break;
      case States.response:
        state = States.finish;
        break;
    }
  }


  //handel anwser
  function anwser(bol) {
    //animation
    console.log(bol)
    if (!bol) {
      anwserVideo = badAnwserVideo;
      messageShow = messageLose;
    }else{
      score.update(score => score+ 1)
      anwserVideo = goodAnwserVideo;
    }
    goodAnwser = anwsers.filter(a =>a.isAnwser)[0].response;
    state = States.showAnwser;

  }

  function startResponse() {
    if(anwserVideo ===null) return;
    src = anwserVideo;
    state = States.response;
    startVideo();
  }

  onMount(() => {
    if (presentationVideo != null) {
      src = presentationVideo;
    }
  });
</script>

<div class=" flex flex-col">
  <div class="text-center text-3xl font-bold text-white text">
    {title}
  </div>
  <div class="relative">
    <video
      poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
      {src}
      
      bind:currentTime={time}
      bind:duration
      bind:paused
      bind:volume={volume}
    >
      <track kind="captions" />
    </video>

    <div class="videoFiltre" on:mousemove={handleMove} />

    <div class="controls" style="opacity: {duration && showControls ? 1 : 0}"  on:mousemove={handleMove} >
      <div class="info">
        <input type="range"  bind:value={volume} max="1" step="0.1">
      </div>
    </div>

    {#if !isStarted}
      <button class="circle" on:click={startVideo}>
        <MdPlayCircleOutline ></MdPlayCircleOutline>
      </button>
    {/if}

    {#if show}
      <button class="circle" on:click={restardVideo}>
        <MdReplay></MdReplay>
      </button>
    {/if}
  </div>

  {#if state >= 1 && state<3}
    <div class="flex flex-col justify-between">
      <h1 class="text-white text-base  md:text-lg text-center">{question}</h1>
      <div class="grid grid-cols-2 gap-4 scale-in-ver-bottom">
        {#each anwsers as card}
          <Card
            card={card.response}
            isCorrect={card.isAnwser}
            on:correctAnwserSelected={(i) => anwser(i.detail)}
          />
        {/each}
      </div>
    </div>
  {/if}

  {#if state == States.showAnwser}
  <div class="bg-gray-700 bg-opacity-50 w-full h-full inset-center">
    <div class="flex justify-center flex-col items-center h-full">
      <div class="md:text-6xl text-3xl  big-text ">
        {messageShow}
      </div>
      {#if messageShow === messageLose}
      <div class="md:text-2xl text-xl  big-text ">
        La bonne réponse était : {goodAnwser}
      </div>
      {/if}

      <button
        class="rounded-md bg-indigo-600 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        on:click={startResponse}
        >
        Voir l'explication
      </button>
    </div>
  </div>
  {/if}


  {#if state == States.finish}
  <button
  class="rounded-md bg-indigo-600 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  on:click={() =>  event("Finish")}
  >
  Scénario suivant
</button>
  {/if}


</div>


<style>
  .scale-in-ver-bottom {
    -webkit-animation: scale-in-ver-bottom 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  .inset-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .big-text {
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
  }

  .videoFiltre {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1s;
  }

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  span {
    padding: 0.2em 0.5em;
    color: white;
    text-shadow: 0 0 8px black;
    font-size: 1.4em;
    opacity: 0.7;
  }

  .time {
    width: 3em;
  }

  .time:last-child {
    text-align: right;
  }

  progress {
    display: block;
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 0.2);
  }

  progress::-webkit-progress-value {
    background-color: rgba(255, 255, 255, 0.6);
  }

  video {
    width: 100%;
  }

  .team {
    position: absolute;
    bottom: 0;
    height: 30%;
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-auto-rows: 15%;
    grid-gap: 2.25rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-image: linear-gradient(135deg, #8bc5ecab 0%, #9599e2bc 100%);
    
  }

  .circle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: transparent;
    display: grid;
    place-content: center;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    color: #ffffff;
  }


  /* ----------------------------------------------
 * Generated by Animista on 2022-12-2 22:2:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation scale-in-ver-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes scale-in-ver-bottom {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
  @keyframes scale-in-ver-bottom {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }


  .controls {
		position: absolute;
		bottom: 0;
		width: 100%;
		transition: opacity 1s;
	}
  .info {
		display: flex;
		width: 100%;
		justify-content: flex-end;
    padding: 10px;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

</style>
