<script lang="ts">
  import { onMount } from "svelte";
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "svelte-youtube";
  import axios from "axios";

  const options = {
    width: "100vw",
    playerVars: {
      rel: 0,
    },
  };
  const movie = {
    title: "",
  };

  onMount(() => {});
</script>

<main>
  <div class="video-wrapper">
    <YouTube class="youtube" videoId={parse($querystring).id} {options} />
  </div>
</main>

<style lang="scss" module>
  .youtube iframe {
    width: 100vw;
    height: auto;
  }
</style>
