<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import { heroSlides } from "../../data/heroData";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Autoplay, EffectFade, Pagination, Navigation];
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
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :navigation="true"
        class="hero-swiper"
      >
        <SwiperSlide
          v-for="slide in heroSlides"
          :key="slide.id"
          class="hero-slide"
        >
          <div class="slide-bg">
            <img :src="slide.image" :alt="slide.title" />
            <div class="overlay"></div>
          </div>
          <div class="container slide-content">
            <div class="content-wrapper">
              <h1 class="title">{{ slide.title }}</h1>
              <p class="desc">{{ slide.description }}</p>
              <NuxtLink :to="slide.link" class="btn btn--primary">{{
                slide.text
              }}</NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
