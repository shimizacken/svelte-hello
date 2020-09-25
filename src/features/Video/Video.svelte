<script lang="ts">
    export let mediaStream: MediaStream;

    $: if (mediaStream) {
        const video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
    }
</script>

<video width="300" height="200">
    <track kind="captions" />
</video>
