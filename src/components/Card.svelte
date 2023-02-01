<script>
  import { onMount, createEventDispatcher } from "svelte";

  const event = createEventDispatcher();

  export let card;
  export let isCorrect = false;

  let ref;

  function flip() {
    if (isCorrect) {
      ref.classList.toggle("bg-green-500");
      ref.classList.toggle("bg-white");
	  event("correctAnwserSelected",true);
    } else {
      ref.classList.toggle("bg-red-500");
      ref.classList.toggle("bg-white");
    event("correctAnwserSelected",false);
    }
  }
</script>

<button bind:this={ref} class="bg-white" on:click={flip}>
  <div class="back">
    <h1 class="text-sm md:text-base">
      {card}
    </h1>
  </div>
</button>

<style>
  button {
    padding: 2rem;
    border: none;
    margin: 0;
    box-shadow: 0 1px 5px -2px hsla(0, 0%, 0%, 0.5);
    border-radius: 10px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.75s ease-out;
  }

  div {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
  }
  .back {
    transform: rotateY(0deg);
  }
</style>
