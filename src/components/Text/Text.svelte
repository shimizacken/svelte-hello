<script lang="ts">
  import type { TextType } from './textType'

  export let text: string
  export let className: string
  export let textType: TextType
</script>

{#if textType === 'span'}
  <span class={className}> {text} </span>
{:else}
  <p>{text}</p>
{/if}
