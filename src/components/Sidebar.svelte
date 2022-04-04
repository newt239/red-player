<script lang="ts">
  import { link } from "svelte-spa-router";
  import { Sliders, Search } from "svelte-bootstrap-icons";
</script>

<div class="tabGroup">
  <a class="tab" href="/config/" use:link><Sliders /></a>
  <a class="tab" href="/search/" use:link><Search /></a>
</div>
