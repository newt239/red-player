<script lang="ts">
  import { link } from "svelte-spa-router";
  import { apiKeyStore } from "../store";

  import { Save } from "svelte-bootstrap-icons";

  let apiKey: string = "";
  apiKeyStore.subscribe((value) => {
    apiKey = value;
  });
</script>

<main>
  <h2>Settings</h2>
  <h3>API Key</h3>
  <div class="input-box">
    <input class="input-text" type="text" bind:value={apiKey} />
    <button
      class="button-action"
      alt="save"
      on:click={() => apiKeyStore.update(apiKey)}><Save /></button
    >
  </div>
</main>
