<script lang="ts">
  import Router from "svelte-spa-router";
  import HeaderComp from "./components/Header.svelte";
  import SidebarComp from "./components/Sidebar.svelte";
  import HomePage from "./pages/Home.svelte";
  import ConfigPage from "./pages/Config.svelte";
  import SearchPage from "./pages/Search.svelte";
  import ViewPage from "./pages/View.svelte";

  const routes = {
    "/": HomePage,
    "/config/*": ConfigPage,
    "/search/*": SearchPage,
    "/view/*": ViewPage,
  };
</script>

<div class="wrapper">
  <HeaderComp />
  <div class="container">
    <SidebarComp />
    <Router {routes} />
  </div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @import "styles/base";
</style>
