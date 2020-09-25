<script lang="ts">
    import {onMount} from 'svelte';
    import {onDestroy} from 'svelte';

    export let mediaStream: MediaStream;

    let video: HTMLMediaElement;

    onMount(() => {
        video = document.querySelector('video');
    });

    onDestroy(() => {
        // todo: reset video
    });

    $: if (mediaStream) {
        video.srcObject = mediaStream;

        video.onloadedmetadata = function (e) {
            video.play();
        };
    }
</script>

<video width="300" height="200">
    <track kind="captions" />
</video>

<style>
    video {
        border-radius: 10px;
    }
</style>
