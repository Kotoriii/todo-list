<template>
  <BbNavbar />
  <SearchAndFilter />
  <main class="relative min-h-screen">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import BbNavbar from "./components/BbNavbar.vue";
import SearchAndFilter from "./components/SearchAndFilter.vue";
</script>
