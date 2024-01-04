import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Todo } from "@/types/todo";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([{ id: 1, text: "First ToDo", date: new Date() }]);
  // ID could be a UUID in case we just want to hide deleted ToDos, but I went for this simple solution for now
  const lastId = computed(() => (todos.value.length ? todos.value[todos.value.length - 1].id : 1));

  const addTodo = (text: string) => {
    todos.value.push({ id: lastId.value + 1, text, date: new Date() });
  };
  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return { todos, addTodo, deleteTodo };
});
