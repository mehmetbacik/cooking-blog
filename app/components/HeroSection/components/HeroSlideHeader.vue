<script setup lang="ts">
defineProps({
  slide: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="slide__header">
    <span class="badge">{{ slide.badge }}</span>
    <h1 class="title">{{ slide.title }}</h1>
    <p class="desc">{{ slide.description }}</p>
    <div class="slide__metadata">
      <span class="time">{{ slide.time }}</span>
      <span class="category">{{ slide.category }}</span>
    </div>
  </div>
</template>
