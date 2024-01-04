<template>
  <section>
    <ul>
      <li v-for="item in items" :key="item.id" class="flex justify-between mb-16">
        <div class="flex space-x-8">
          <BbCheckbox :model-value="item.done" :id="item.id.toString()" @update:modelValue="toggleDone(item.id)" />
          <div class="flex flex-col space-y-1">
            <label :for="item.id.toString()" class="text-15">{{ item.text }}</label>
            <div class="text-10 text-gray-dark">{{ new Date(item.date).toLocaleString() }}</div>
          </div>
        </div>
        <BbButton small variant="outlined" @click="deleteItem(item.id)">Delete</BbButton>
      </li>
      <!-- <li v-for="item in items" :key="item.id">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="w-20 h-20"
              :checked="item.done"
              @change="toggleDone(item)"
            />
            <span class="text-28 ml-20" :class="{ 'line-through': item.done }">
              {{ item.title }}
            </span>
          </div>
          <button class="text-28" @click="deleteItem(item)">x</button>
        </div>
      </li> -->
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTodoStore } from "@/stores/todo";
import BbCheckbox from "./BbCheckbox.vue";
import BbButton from "./BbButton.vue";
import { Todo } from "@/types/todo";

const props = withDefaults(
  defineProps<{
    done: boolean;
  }>(),
  {
    done: false,
  }
);

const todoStore = useTodoStore();

const items = computed<Todo[]>(() => (props.done ? todoStore.doneItems : todoStore.todos));

const toggleDone = (itemId: number) => {
  todoStore.toggleDone(itemId);
};
const deleteItem = (itemId: number) => {
  todoStore.deleteTodo(itemId);
};
</script>
