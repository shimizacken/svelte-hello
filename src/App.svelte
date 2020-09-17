<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import Button from './components/Button.svelte'
  import Heading from './components/Heading/Heading.svelte'
  import Logo from './components/Logo.svelte'
  import { HeadingType } from './types/textTypes'

  export let name: string

  const onClick = (e: MouseEvent) => console.log(e)
</script>

<main>
  <Logo />
  <Heading text="Hello {name}!" headingType={HeadingType.H3} />
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <Button {onClick} text="Click me!" />
</main>
