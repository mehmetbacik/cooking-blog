<script setup lang="ts">
import type { SlideItem } from "../../../types";

defineProps<{ slide: SlideItem }>();
</script>

<template>
  <div class="slide-bg">
    <picture>
      <source
        v-if="slide.mobileImage"
        :srcset="slide.mobileImage"
        media="(max-width: 425px)"
      />
      <source
        v-if="slide.mobileImage"
        :srcset="slide.mobileImage"
        media="(max-width: 576px)"
      />
      <source
        v-if="slide.mobileImage"
        :srcset="slide.mobileImage"
        media="(max-width: 768px)"
      />
      <img :src="slide.image" :alt="slide.title" />
    </picture>
    <div class="overlay"></div>
  </div>
</template>
