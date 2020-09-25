<script lang="ts">
    import {onMount} from 'svelte';

    export let mediaStream: MediaStream;

    let video: HTMLMediaElement;

    onMount(async () => {
        video = document.querySelector('video');
    });

    $: if (mediaStream) {
        video.srcObject = mediaStream;
        video.play();
    }
</script>

<video width="300" height="200">
    <track kind="captions" />
</video>
