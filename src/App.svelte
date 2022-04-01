<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";
  import View from "./pages/View.svelte";

  const routes = {
    "/": Home,
    "/search": Search,
    "/view": View,
  };
</script>

<main>
  <Header />
  <Router {routes} />
</main>

<style lang="scss" module>
  @import "./style";
</style>
