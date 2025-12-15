<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import HeroSlideContent from "./components/HeroSlideContent.vue";

import { heroSlides } from "../../data/heroData";

import "swiper/css";
import "swiper/css/effect-fade";

const modules = [Autoplay, EffectFade];
</script>

<template>
  <section class="hero">
    <div class="container hero__content">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :speed="1000"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="slide in heroSlides" :key="slide.id">
          <HeroSlideContent :slide="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>