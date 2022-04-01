<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
</script>

<main>
  <Router>
    <Route path="" component={Home} name="world" />
  </Router>
</main>
