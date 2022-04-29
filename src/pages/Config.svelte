<script lang="ts">
  import { apiKeyStore, globalConfigStore } from "../store";

  import { Save } from "svelte-bootstrap-icons";

  let apiKey: string = "";
  apiKeyStore.subscribe((value) => {
    apiKey = value;
  });
</script>

<main>
  <h2>Settings</h2>
  <h3>API Key</h3>
  <div class="inputBox">
    <input class="inputTextBlock" type="text" bind:value={apiKey} />
    <button
      class="actionButton"
      alt="save"
      on:click={() => apiKeyStore.update(apiKey)}><Save /></button
    >
  </div>
  <div class="inputBox">
    <label for="autoPlayState" class="checkboxLabel">
      <input
        id="autoPlayState"
        type="checkbox"
        checked={$globalConfigStore.video.autoplay}
        on:change={() =>
          ($globalConfigStore.video.autoplay =
            !$globalConfigStore.video.autoplay)}
      />
      <span>enable auto play when load view page</span>
    </label>
  </div>
</main>
