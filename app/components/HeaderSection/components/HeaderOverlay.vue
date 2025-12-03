<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div class="header__overlay" @click="$emit('click')"></div>
</template>
