<script setup lang="ts">
const BannerPath = "/images/home/banner/homeBanner.png";
</script>

<template>
  <section class="homeBanner">
    <div class="container homeBanner__content">
      <div class="homeBanner__intro">
        <h2 class="homeBanner__title">Everyone can be a chef&nbsp;in their own kitchen</h2>
        <p class="homeBanner__desc">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad&nbsp;minim
        </p>
        <NuxtLink class="homeBanner__btn" to="/about">Learn More</NuxtLink>
      </div>
      <div class="homeBanner__media">
        <img :src="BannerPath" alt="Banner" />
      </div>
    </div>
  </section>
</template>
