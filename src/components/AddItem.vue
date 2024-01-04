<template>
  <section class="absolute w-full bottom-48">
    <div class="flex space-x-16">
      <BbInput class="flex-1" v-model="itemText" placeholder="ToDo text" />
      <BbButton class="whitespace-nowrap" :disabled="buttonDisabled" @click="addTodo">Add Item</BbButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todo";
import { useRoute } from "vue-router";
import BbInput from "./BbInput.vue";
import BbButton from "./BbButton.vue";

const todoStore = useTodoStore();
const route = useRoute();

const itemText = ref<string>("");

const buttonDisabled = computed<boolean>(() => itemText.value === "");
const done = computed<boolean>(() => route.path === "/done");

const addTodo = () => {
  todoStore.addTodo(itemText.value, done.value);
  itemText.value = "";
};
</script>
