<script setup lang="ts">

defineProps({
  slide: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="slide__footer">
    <div class="author-wrapper">
      <span class="author-photo">
        <img :src="slide.photo" :alt="slide.author" />
      </span>
      <div class="author-content">
        <span class="author">{{ slide.author }}</span>
        <span class="date">{{ slide.date }}</span>
      </div>
    </div>

    <NuxtLink :to="slide.link" class="hero-button">
      {{ slide.text }}
    </NuxtLink>
  </div>
</template>
