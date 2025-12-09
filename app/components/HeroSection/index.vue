<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

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
          delay: 9995000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="slide in heroSlides" :key="slide.id">
          <div class="slide-bg">
            <img :src="slide.image" :alt="slide.title" />
            <div class="overlay"></div>
          </div>
          <div class="slide-content">
            <div class="content-wrapper">
              <div class="slide__header">
                <span class="badge">{{ slide.badge }}</span>
                <h1 class="title">{{ slide.title }}</h1>
                <p class="desc">{{ slide.description }}</p>
              </div>

              <div class="slide__metadata">
                <span class="time">{{ slide.time }}</span>
                <span class="category">{{ slide.category }}</span>
              </div>

              <div class="slide__footer">
                <span class="author">{{ slide.author }}</span>
                <span class="date">{{ slide.date }}</span>
                <span class="author__photo">
                  <img :src="slide.photo" :alt="slide.author" />
                </span>
                <NuxtLink :to="slide.link" class="btn btn--primary">{{
                  slide.text
                }}</NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
