<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import { videoInfoListStore } from "../store";
  import { Sliders, Search, PlayFill } from "svelte-bootstrap-icons";
</script>

<div class="tabGroup">
  <a
    class="tab {$location.indexOf('config') != -1 && 'active-tab'}"
    href="/config/"
    use:link><Sliders /></a
  >
  <a
    class="tab {$location.indexOf('search') != -1 && 'active-tab'}"
    href="/search/"
    use:link><Search /></a
  >
  {#if $videoInfoListStore.length != 0}
    <a
      class="tab {$location.indexOf('view') != -1 && 'active-tab'}"
      href="/view/?id={$videoInfoListStore[0].id}"
      use:link><PlayFill /></a
    >
  {/if}
</div>
