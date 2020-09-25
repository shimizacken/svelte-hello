<script lang="ts">
    import {getUserMedia} from './logic/getUserMedia';
    import Text from '../../components/Text/Text.svelte';
    import Video from './Video.svelte';
    import Button from '../../components/Button/Button.svelte';
    import VideoControlButton from '../../components/VideoControlButton/VideoControlButton.svelte';

    let displayLoader = false;
    let mediaStream: MediaStream;
    const constraints = {audio: true, video: {width: 300, height: 200}};

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

<Button text="Start video" {onClick} />
{#if displayLoader}
    <Text text="loading..." />
{/if}
<div class="video-container">
    <div class="mute-button-position">
        <VideoControlButton />
    </div>
    <Video {mediaStream} />
</div>

<style>
    .video-container {
        position: relative;
        width: 300px;
        height: 200px;
        border-radius: 10px;
    }

    .mute-button-position {
        position: absolute;
        top: 3px;
        right: 8px;
        z-index: 1000;
    }
</style>
