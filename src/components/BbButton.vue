<template>
  <button
    class="font-medium border rounded"
    :class="{
      'text-13 py-8 px-12': small,
      'text-15 py-12 px-15': !small,
      'bg-blue text-white border-blue-dark hover:bg-blue-light hover:border-blue disabled:bg-gray-light disabled:border-gray':
        variant === 'default',
      'border-gray-light text-blue active:border-gray-dark active:text-blue-dark': variant === 'outlined',
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "outlined";
    small?: boolean;
    disabled?: boolean;
  }>(),
  {
    variant: "default",
    small: false,
    disabled: false,
  }
);
</script>
