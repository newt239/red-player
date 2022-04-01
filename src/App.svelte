<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";

  const routes = {
    "/": Home,
    "/search": Search,
  };
</script>

<main>
  <Router {routes} />
</main>
