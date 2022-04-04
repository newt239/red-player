<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<main class="home">
  <h2>Welcome</h2>
  <p>This is Youtube Desktop Client App.</p>
  <p>
    First, get your Youtube API Key from GCP Console and set it to config page's
    form.
  </p>
  <div class="menuGrid">
    <a class="menu-card" href="/config/" use:link><span>Config</span></a>
    <a class="menu-card" href="/search/" use:link><span>Search</span></a>
  </div>
</main>
