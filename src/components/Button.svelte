<script lang="ts">
  import { ButtonType } from '../types/buttonTypes'

  export let onClick: (e: MouseEvent) => void | undefined
  export let text: string | undefined
  export let buttonType: ButtonType | undefined
</script>

<button
  on:click={onClick}
  type={buttonType || ButtonType.BUTTON}>{text}</button>
