<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { apiKeyStore, videoInfoListStore } from "../store";
  import { parse } from "qs";
  import { querystring } from "svelte-spa-router";
  import YouTube from "../components/Youtube.svelte";
  import axios from "axios";

  let status = false;

  let movie = {
    title: "",
    description: "",
  };

  let player;

  onMount(async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${
      parse($querystring).id
    }&key=${$apiKeyStore}`;
    const res = await axios.get(url);
    if (res.data.pageInfo.totalResults > 0) {
      movie = {
        title: res.data.items[0].snippet.title,
        description: escapeHtml(res.data.items[0].snippet.description),
      };
    }
    if (
      $videoInfoListStore.length == 0 ||
      $videoInfoListStore[0].id != parse($querystring).id
    ) {
      $videoInfoListStore = [
        { id: parse($querystring).id },
        ...$videoInfoListStore,
      ];
    }
    status = true;
    console.log(status);
  });

  onDestroy(() => {
    const info = player.destroyPlayer();
    $videoInfoListStore[0].currentTime = info.currentTime;
  });

  const escapeHtml = (text: string) => {
    return text.replace(/\n/g, "<br>");
  };
</script>

<main class="view">
  {#if status}
    <div class="youtube">
      <YouTube videoId={parse($querystring).id} bind:this={player} />
    </div>
  {/if}
  <div class="video-info">
    <div class="video-controls" />
    <h2>{movie.title}</h2>
    <p>{@html movie.description}</p>
  </div>
</main>
