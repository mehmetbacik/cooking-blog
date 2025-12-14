<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import type { SlideItem as SlideItemType } from "../../../types";

import HeroSlideMedia from "./HeroSlideMedia.vue";
import HeroSlideHeader from "./HeroSlideHeader.vue";
import HeroSlideFooter from "./HeroSlideFooter.vue";

defineProps<{
  slide: SlideItemType;
}>();
</script>

<template>
  <SwiperSlide>
    <HeroSlideMedia :slide="slide" />

    <div class="slide-content">
      <div class="content-wrapper">
        <HeroSlideHeader :slide="slide" />
        <HeroSlideFooter :slide="slide" />
      </div>
    </div>
  </SwiperSlide>
</template>
