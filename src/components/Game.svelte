<style>
    div {
        width: 300px;
        height: 300px;
        background-color: black;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { gameInProgress, score } from '../stores';
    import Thing from './Thing.svelte';

    let things = [];
    const colours = [
        '#ff0080',
        '#0092ff',
        '#ffdf00'
    ];
    const m = { x: 0, y: 0, xSpeed: 0, ySpeed: 0 };

    const onMainClicked = e => {
        if ($gameInProgress) {
            m.x = e.clientX - 8;
            m.y = e.clientY - 8;
            m.xSpeed = Math.random() * 8 - 4;
            m.ySpeed = Math.random() * 8 - 4;
            m.rotation = 0;
            m.rotationSpeed = Math.random() * 8 - 4;
            if (m.xSpeed <= 0 && m.xSpeed > -1) m.xSpeed = -1;
            if (m.xSpeed >= 0 && m.xSpeed < 1) m.xSpeed = 1;
            if (m.ySpeed <= 0 && m.ySpeed > -1) m.ySpeed = -1;
            if (m.ySpeed >= 0 && m.ySpeed < 1) m.ySpeed = 1;
            m.colour = colours[Math.floor(Math.random() * 3)];

            things = [...things, {...m}];
            score.update(s => s += 1);
        }
    };

    onMount(() => {
        let frame;
        (function loop() {
            frame = requestAnimationFrame(loop);
            things = things.map(thing => {
                thing.x += thing.xSpeed;
                thing.y += thing.ySpeed;
                thing.rotation += thing.rotationSpeed;

                if (thing.x <= 8 || thing.x >= 298) {
                    thing.xSpeed = -1 * thing.xSpeed;
                }

                if (thing.y <= 8 || thing.y >= 298) {
                    thing.ySpeed = -1 * thing.ySpeed;
                }

                return thing;
            });
        }());

        return () => {
            cancelAnimationFrame(frame);
        };
    });
</script>

<div on:click={onMainClicked}>
    {#each things as thing, i}
        <Thing thing={thing} />
    {/each}
</div>
