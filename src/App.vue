<template>
  <BbNavbar />
  <main class="relative min-h-screen">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import BbNavbar from "./components/BbNavbar.vue";
</script>
