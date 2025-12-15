<script setup lang="ts">
import SlideHeader from "./HeroSlideHeader.vue";
import SlideFooter from "./HeroSlideFooter.vue";

defineProps({
  slide: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="slide-bg">
    <picture>
      <source
        v-if="slide.mobileImage"
        :srcset="slide.mobileImage"
        media="(max-width: 768px)"
      />
      <img :src="slide.image" :alt="slide.title" />
    </picture>
    <div class="overlay"></div>
  </div>

  <div class="slide-content">
    <div class="content-wrapper">
      <SlideHeader :slide="slide" />

      <SlideFooter :slide="slide" />
    </div>
  </div>
</template>