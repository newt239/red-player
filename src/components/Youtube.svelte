<script context="module">
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = () =>
    window.dispatchEvent(new Event("iframeApiReady"));
</script>

<script>
  import { onMount } from "svelte";
  import { globalConfigStore } from "../store";
  export let videoId;
  let player;
  onMount(() => {
    player = new YT.Player("youtube", {
      height: "390",
      width: "640",
      videoId,
      events: {
        onReady: playerIsReady,
      },
      rel: 0,
      controls: 0,
      showinfo: 0,
    });
  });
  function playerIsReady() {
    if ($globalConfigStore.video.autoplay) {
      player.playVideo();
    }
  }
  export const destroyPlayer = () => {
    player.stopVideo();
    return { currentTime: player.getCurrentTime() };
  };
</script>

<div id="youtube" />
