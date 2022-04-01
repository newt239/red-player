<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";

  const routes = {
    "/": Home,
    "/search": Search,
  };
</script>

<main>
  <Header />
  <Router {routes} />
</main>

<style lang="scss" module>
  @import "./style";
</style>
