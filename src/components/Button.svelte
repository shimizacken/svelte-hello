<script lang="ts">
import { ButtonType } from "../types/buttonTypes";


    export let onClick: (e: MouseEvent) => void;
    export let text: string;
    export let buttonType: ButtonType;
</script>

<button on:click={onClick} type={buttonType}>{text}</button>