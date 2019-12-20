<style>
    div {
        position: absolute;
    }
</style>

<script>
    export let thing;
    let width = Math.ceil(Math.random() * 15) + 5;
    let height = Math.ceil(Math.random() * 15) + 5;
</script>

<div style="width: {width}px;
            height: {height}px;
            top: {thing.y}px;
            left: {thing.x}px;
            background-color: {thing.colour};
            transform: rotate({thing.rotation}deg);">

</div>
