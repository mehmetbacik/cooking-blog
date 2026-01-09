<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="search-box">
    <input
      class="search-input"
      :placeholder="placeholder || 'Search...'"
      :value="modelValue"
      @input="onInput"
      type="text"
    />
  </div>
</template>
