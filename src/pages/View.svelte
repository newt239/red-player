<script lang="ts">
  import { onMount } from "svelte";
  import { apiKeyStore } from "../store";
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "svelte-youtube";
  import axios from "axios";

  const options = {
    playerVars: {
      rel: 0,
      controls: 0,
      showinfo: 0,
    },
  };

  let movie = {
    title: "",
    description: "",
  };
  const escapeHtml = (text: string) => {
    return text.replace(/\n/g, "<br>");
  };

  const movieData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${
      parse($querystring).id
    }&key=${$apiKeyStore}`;
    const res = await axios.get(url);
    if (res.data.pageInfo.totalResults > 0) {
      console.log(res.data.items[0].snippet.description);
      movie = {
        title: res.data.items[0].snippet.title,
        description: escapeHtml(res.data.items[0].snippet.description),
      };
    }
  };
  onMount(() => {
    movieData();
  });
</script>

<main class="view">
  <YouTube class="youtube" videoId={parse($querystring).id} {options} />
  <div class="video-info">
    <div class="video-controls" />
    <h2>{movie.title}</h2>
    <p>{@html movie.description}</p>
  </div>
</main>

<style>
</style>
