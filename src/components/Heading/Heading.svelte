<script lang="ts">
  import { HeadingType } from '../../types/textTypes'

  export let text: string
  export let headingType: HeadingType | HeadingType.H1
</script>

{#if headingType === HeadingType.H1}
  <h1>{text}</h1>
{:else if headingType === HeadingType.H2}
  <h2>{text}</h2>
{:else if headingType === HeadingType.H3}
  <h3>{text}</h3>
{:else if headingType === HeadingType.H4}
  <h4>{text}</h4>
{:else if headingType === HeadingType.H5}
  <h5>{text}</h5>
{:else if headingType === HeadingType.H6}
  <h6>{text}</h6>
{/if}

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 3em;
  }

  h3 {
    font-size: 2em;
  }
</style>
