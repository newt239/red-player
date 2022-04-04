<script lang="ts">
  import { link } from "svelte-spa-router";
  import { apiKeyStore } from "../store";
  import axios from "axios";

  import { Search } from "svelte-bootstrap-icons";

  let keyword: string = "";
  let result = [];

  const search = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=${$apiKeyStore}`;
    const res = await axios.get(url);
    result = res.data.items;
  };
</script>

<main class="search">
  <div class="search-header">
    <h2>Search</h2>
    <div class="search-box">
      <input class="input-keyword" type="text" bind:value={keyword} />
      <button class="button-search" on:click={search}><Search /></button>
    </div>
  </div>
  <div class="search-result">
    {#each result as item}
      <a class="movie-wrapper" href={`/view/?id=${item.id.videoId}`} use:link>
        <img
          src={item.snippet.thumbnails.high.url}
          alt={item.snippet.title}
          width={item.snippet.thumbnails.high.width}
          height={item.snippet.thumbnails.high.height}
        />
        <div class="movie-snippet">
          <h4>{item.snippet.title}</h4>
        </div>
      </a>
    {/each}
  </div>
</main>
