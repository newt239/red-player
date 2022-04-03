<script lang="ts">
  import { onMount } from "svelte";
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "svelte-youtube";
  import axios from "axios";

  const options = {
    playerVars: {
      rel: 0,
    },
  };
  const movie = {
    title: "",
  };

  onMount(() => {});
</script>

<main class="view">
  <YouTube
    class="youtube"
    style={`iframe { aspect-ratio: 1 / 2; }`}
    videoId={parse($querystring).id}
    {options}
  />
  <div class="video-info">
    <h2>Video Title</h2>
  </div>
</main>

<style>
</style>
