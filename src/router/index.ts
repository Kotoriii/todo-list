import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";
import DoneList from "../views/DoneList.vue";

const routes = [
  { path: "/", redirect: "/todos" },
  { path: "/todo", component: TodoList },
  { path: "/done", component: DoneList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
