<template>
  <ItemList :done="false" />
  <AddItem :done="false" />
</template>

<script setup lang="ts">
import ItemList from "@/components/ItemList.vue";
import AddItem from "@/components/AddItem.vue";
</script>
