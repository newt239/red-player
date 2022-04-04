<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import { Sliders, Search } from "svelte-bootstrap-icons";
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
</div>
