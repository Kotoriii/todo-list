import { ref } from "vue";
import { defineStore } from "pinia";
import { Todo } from "@/types/todo";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([{ id: 1, text: "First ToDo", date: new Date() }]);

  const addTodo = (todo: Todo) => {
    todos.value.push(todo);
  };

  return { todos, addTodo };
});
