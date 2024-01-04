import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Todo } from "@/types/todo";

export const useTodoStore = defineStore("todo", () => {
  const items = ref<Todo[]>([{ id: 1, text: "First ToDo", date: new Date(), done: false }]);
  // ID could be a UUID in case we just want to hide deleted ToDos, but I went for this simple solution for now
  const lastId = computed(() => (items.value.length ? items.value[items.value.length - 1].id : 1));

  const todos = computed(() => items.value.filter((item) => !item.done));
  const doneItems = computed(() => items.value.filter((item) => item.done));

  const addTodo = (text: string, done: boolean) => {
    items.value.push({ id: lastId.value + 1, text, date: new Date(), done });
  };
  const deleteTodo = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id);
  };
  const toggleDone = (id: number) => {
    const todo = items.value.find((item) => item.id === id);

    if (todo) {
      todo.done = !todo.done;
    }
  };

  return { items, todos, doneItems, addTodo, deleteTodo, toggleDone };
});
