<script lang="ts">
  import { onMount } from "svelte";
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "svelte-youtube";
  import axios from "axios";

  const options = {
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };
  const movie = {
    title: "",
  };

  onMount(() => {});
</script>

<main>
  <YouTube videoId={parse($querystring).id} {options} />
  <div />
</main>
