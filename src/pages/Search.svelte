<script lang="ts">
  import { link } from "svelte-spa-router";
  import { apiKeyStore } from "../store";
  import axios from "axios";

  let keyword: string = "";
  let result = [];

  const search = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=${$apiKeyStore}`;
    const res = await axios.get(url);
    result = res.data.items;
  };
</script>

<main>
  <h2>Search</h2>
  <input class="keyword" type="url" bind:value={keyword} />
  <input type="button" on:click={search} value="検索" />
  <div>
    {#each result as item}
      <a href={`/view/?id=${item.id.videoId}`} use:link>
        <h4>{item.snippet.title}</h4>
        <img
          src={item.snippet.thumbnails.high.url}
          alt={item.snippet.title}
          width={item.snippet.thumbnails.high.width}
          height={item.snippet.thumbnails.high.height}
        />
      </a>
    {/each}
  </div>
</main>
