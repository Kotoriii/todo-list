<template>
  <nav class="w-full flex space-x-32 border-b border-gray">
    <RouterLink
      to="/todo"
      class="py-20 text-28 text-gray-dark font-bold"
      active-class="!text-black border-b border-blue"
      >To Do</RouterLink
    >
    <RouterLink
      to="/done"
      class="py-20 text-28 text-gray-dark font-bold"
      active-class="!text-black border-b border-blue"
      >Done</RouterLink
    >
  </nav>
</template>

<script lang="ts" setup></script>
