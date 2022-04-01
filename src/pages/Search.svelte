<script lang="ts">
  import axios from "axios";

  let apiKey: string = "";
  let keyword: string = "";
  let result = [];

  const search = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=${apiKey}`;
    const res = await axios.get(url);
    result = res.data.items;
  };
</script>

<main>
  <h1>Search Youtube movies</h1>
  <h2>api key</h2>
  <input type="text" bind:value={apiKey} />
  <h2>keyword</h2>
  <input type="url" bind:value={keyword} />
  <input type="button" on:click={search} />
  <div>
    {#each result as item}
      <h3>{item.snippet.title}</h3>
      <img
        src={item.snippet.thumbnails.high.url}
        alt={item.snippet.thumbnails.high.url}
      />
    {/each}
  </div>
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
