<script lang="ts">
  let apiKey: string = "";
  let url: string = "";
  let result = [];
</script>

<main>
  <h1>Search Youtube movies</h1>
  <h2>api key</h2>
  <input type="text" bind:value={apiKey} />
  <h2>url</h2>
  <input type="url" bind:value={url} />
  <input type="button" />
  <div>{result}</div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
