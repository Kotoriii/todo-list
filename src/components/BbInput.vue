<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="text-15 text-black placeholder:text-gray-light border border-gray-light rounded py-12 px-15 focus:border-blue"
    @input="updateValue"
  />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
    modelValue?: string;
    placeholder?: string;
  }>(),
  {
    type: "text",
    modelValue: "",
    placeholder: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
