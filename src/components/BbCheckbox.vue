<template>
  <input
    :value="modelValue"
    type="checkbox"
    class="w-24 h-24 border-gray-light shadow-md rounded-full"
    @input="updateValue"
  />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
