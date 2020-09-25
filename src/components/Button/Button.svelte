<script lang="ts">
    import {ButtonType} from './buttonTypes';

    export let onClick: (e: MouseEvent) => void | undefined;
    export let text: string | undefined;
    export let buttonType: ButtonType | undefined;
    let clazz: string;
    export {clazz as class};

    console.log(clazz);
</script>

<button
    on:click={onClick}
    type={buttonType || ButtonType.BUTTON}
    class={`${clazz || ''}`}>{text}</button>
