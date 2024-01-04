<template>
  <section class="w-full max-w-[812px] mx-auto fixed bottom-48">
    <div class="flex space-x-16">
      <BbInput class="w-full" v-model="itemText" placeholder="ToDo text" />
      <BbButton :disabled="buttonDisabled" class="whitespace-nowrap" @click="addTodo">Add Item</BbButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todo";
import BbInput from "./BbInput.vue";
import BbButton from "./BbButton.vue";

withDefaults(
  defineProps<{
    todoType?: "todo" | "done";
  }>(),
  {
    todoType: "todo",
  }
);

const todoStore = useTodoStore();

const itemText = ref<string>("");

const buttonDisabled = computed(() => itemText.value === "");

const addTodo = () => {
  todoStore.addTodo(itemText.value);
  itemText.value = "";
};
</script>
