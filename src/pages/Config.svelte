<script lang="ts">
  import { link } from "svelte-spa-router";
  import { apiKeyStore } from "../store";

  let apiKey: string = "";
  apiKeyStore.subscribe((value) => {
    apiKey = value;
  });
</script>

<main>
  <h2>API key</h2>
  <input type="text" bind:value={apiKey} />
  <input
    type="button"
    value="更新"
    on:click={() => apiKeyStore.update(apiKey)}
  />
  <ul>
    <li><a href="/search/" use:link>検索</a></li>
  </ul>
</main>
