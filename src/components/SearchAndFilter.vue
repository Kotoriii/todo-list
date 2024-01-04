<template>
  <section class="my-16 flex">
    <BbInput class="w-full" :model-value="searchText" placeholder="Search" @update:model-value="updateSearch" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import BbInput from "./BbInput.vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

const searchText = computed<string>(() => todoStore.searchText);

const updateSearch = (value: string) => {
  todoStore.updateSearchText(value);
};
</script>
