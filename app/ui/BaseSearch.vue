<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'search'): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="search__wrapper">
    <input
      type="text"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder || 'Search...'"
      class="search__input"
    />
    <button class="search__btn" @click="emit('search')">Search</button>
  </div>
</template>