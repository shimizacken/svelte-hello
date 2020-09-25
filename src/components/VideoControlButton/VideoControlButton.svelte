<script lang="ts">
    import {ButtonType} from '../Button/buttonTypes';

    export let onClick: (e: MouseEvent) => void | undefined;
    export let text: string | undefined;
    export let buttonType: ButtonType | undefined;
</script>

<button
    on:click={onClick}
    type={buttonType || ButtonType.BUTTON}
    class="video-control-button">{text || ''}</button>

<style>
    .video-control-button {
        background-color: greenyellow;
        width: 16px;
        height: 16px;
    }

    .video-control-button:hover {
        cursor: pointer;
        background-color: olivedrab;
    }
</style>
