<template>
  <div class="relative min-h-screen">
    <BbNavbar />
    <SearchAndFilter />
    <main>
      <router-view />
      <AddItem />
    </main>
  </div>
</template>

<script lang="ts" setup>
import BbNavbar from "./components/BbNavbar.vue";
import SearchAndFilter from "./components/SearchAndFilter.vue";
import AddItem from "./components/AddItem.vue";
</script>
