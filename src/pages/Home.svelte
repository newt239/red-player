<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<main>
  <h2>Hello world!</h2>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <ul>
    <li><a href="/search" use:link>検索</a></li>
  </ul>
</main>

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
