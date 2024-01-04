import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Todo } from "@/types/todo";

export const useTodoStore = defineStore("todo", () => {
  const items = ref<Todo[]>([{ id: 1, text: "First ToDo", date: new Date(), done: false }]);
  const searchText = ref<string>("");

  /* 
  The SearchBar should support dates, by typing the following string:
  before: 01.05.2022 => show only Todo Items before the date
  after: 01.02.2022 => show only Todo Items after the date
  between: 01.02.2022 and 01.02.2022 => show only Todo Items between the dates
  */
  const filteredTodos = computed<Todo[]>(() => {
    // 1. Split the searchText into before/after/between
    const [filter, dateStr] = searchText.value.split(":").map((item) => item.trim());

    // 2. If split is not possible, filter by text (lowercase first to avoid case sensitivity)
    if (!filter || !dateStr) {
      return items.value.filter((item) => item.text.toLowerCase().includes(searchText.value.toLowerCase()));
    }

    // 3. Filter by date
    switch (filter) {
      case "before":
        return items.value.filter((item) => new Date(item.date) < new Date(dateStr));
      case "after":
        return items.value.filter((item) => new Date(item.date) > new Date(dateStr));
      case "between":
        const [startDate, endDate] = dateStr.split("and").map((item) => item.trim());

        return items.value.filter(
          (item) => new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate)
        );
      default:
        return items.value;
    }
  });

  // ID could be a UUID in case we just want to hide deleted ToDos, but I went for this simple solution for now
  const lastId = computed(() => (items.value.length ? items.value[items.value.length - 1].id : 1));

  const todos = computed(() => filteredTodos.value.filter((item) => !item.done));
  const doneItems = computed(() => filteredTodos.value.filter((item) => item.done));

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
  const updateSearchText = (text: string) => {
    searchText.value = text;
  };

  return { searchText, filteredTodos, todos, doneItems, addTodo, deleteTodo, toggleDone, updateSearchText };
});
