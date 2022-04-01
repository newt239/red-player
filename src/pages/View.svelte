<script lang="ts">
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "svelte-youtube";

  $: params = parse($querystring);

  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  function onReady(event) {
    event.target.pauseVideo();
  }
</script>

<main>
  <YouTube videoId={params.id} {options} on:ready={onReady} />
</main>
