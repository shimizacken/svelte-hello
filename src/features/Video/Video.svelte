<script lang="ts">
    export let mediaStream: MediaStream;

    $: if (mediaStream) {
        document.querySelector('video').srcObject = mediaStream;
    }
</script>

<video width="300" height="200">
    <track kind="captions" />
</video>
