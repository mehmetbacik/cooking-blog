<script setup lang="ts">
import type { SlideItem } from "../../../types";
defineProps<{ slide: SlideItem }>();
</script>

<template>
  <footer class="slide__footer">
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
  </footer>
</template>
