<template>
  <input
    :value="modelValue"
    :type="type"
    class="text-15 text-black border border-gray-light rounded py-12 px-15 focus:border-blue"
    @input="updateValue"
  />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
    modelValue?: string;
  }>(),
  {
    type: "text",
    modelValue: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
