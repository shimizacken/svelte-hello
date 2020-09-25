<script lang="ts">
    import Video from './features/Video/Video.svelte';
</script>

<main>
    <Video />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
