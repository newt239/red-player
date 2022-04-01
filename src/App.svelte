<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";
</script>

<main>
  <Router>
    <Route path="">
      <Home name="world" />
    </Route>
    <Route path="search">
      <Search />
    </Route>
  </Router>
</main>
