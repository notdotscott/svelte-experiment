<style>
    p {
        margin: 8px 0;
        user-select: none;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { gameInProgress, timer } from '../stores';

    export let time = 0;

    onMount(() => {
        const unsubscribe = timer.subscribe(value => {
            time = value;
            if (time === 0) {
                gameInProgress.set(false);
                unsubscribe();
            }
        });
    });
</script>

{#if time > 0}
    <p>Time left: {time}</p>
{:else}
    <p>Time's up!!</p>
{/if}
