<style>
    :global(body) {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 8px;
        box-sizing: border-box;
    }

    button, div {
        margin: 8px 0 0;
    }

    div {
        user-select: none;
    }
</style>

<script>
    import Game from './components/Game.svelte';
    import Timer from './components/Timer.svelte'
    import { gameInProgress, score } from './stores';

    let time;
    let timeComplete = false;
    const startClicked = () => gameInProgress.set(true);
    $: if (time === 0) {
        timeComplete = true;
    }
</script>

<Game />

{#if $gameInProgress}
    <Timer bind:time={time} />
    <div>Click for your life!!</div>
{:else if !timeComplete}
    <button on:click|once={startClicked}>Start</button>
{/if}

<div>{timeComplete ? 'Final ' : ''}Score: {$score}</div>
