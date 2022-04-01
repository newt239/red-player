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
  <h2>Search Youtube movies</h2>
  <h3>api key</h3>
  <input type="text" bind:value={apiKey} />
  <h3>keyword</h3>
  <input type="url" bind:value={keyword} />
  <input type="button" on:click={search} value="検索" />
  <div>
    {#each result as item}
      <h4>{item.snippet.title}</h4>
      <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
    {/each}
  </div>
</main>
