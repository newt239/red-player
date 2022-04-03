<script lang="ts">
  import { link } from "svelte-spa-router";
  import Router from "svelte-spa-router";
  import HeaderComp from "./components/Header.svelte";
  import HomePage from "./pages/Home.svelte";
  import SearchPage from "./pages/Search.svelte";
  import ViewPage from "./pages/View.svelte";

  import { Sliders, Search } from "svelte-bootstrap-icons";

  const routes = {
    "/": HomePage,
    "/search/*": SearchPage,
    "/view/*": ViewPage,
  };
</script>

<div class="wrapper">
  <HeaderComp />
  <div class="container">
    <div class="tabGroup">
      <a class="tab" href="/config/" use:link><Sliders /></a>
      <a class="tab" href="/search/" use:link><Search /></a>
    </div>
    <Router {routes} />
  </div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @import "styles/base";
</style>
