<script lang="ts">
    import {getUserMedia} from './logic/getUserMedia';
    import Text from '../../components/Text/Text.svelte';
    import Button from '../../components/Button.svelte';

    let displayLoader = false;
    let mediaStream: MediaStream;
    const constraints = {audio: true, video: {width: 300, height: 200}};

    // const getMediaDevices = async () => {
    //     const devices = await navigator.mediaDevices.enumerateDevices();

    //     return devices;
    // };

    const onClick = async () => {
        displayLoader = true;
        mediaStream = await getUserMedia(constraints);
    };

    $: if (mediaStream) {
        displayLoader = false;
        document.querySelector('video').srcObject = mediaStream;
    }

    $: console.log('mediaStream', mediaStream);
</script>

<main>
    <Button text="Start video" {onClick} />
    {#if displayLoader}
        <Text text="loading..." />
    {/if}
    <video>
        <track kind="captions" />
    </video>
</main>
