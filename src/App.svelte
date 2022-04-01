<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";
</script>

<main>
  <Router>
    <Route path="" component={Home} name="world" />
    <Route path="search" component={Search} />
  </Router>
</main>
