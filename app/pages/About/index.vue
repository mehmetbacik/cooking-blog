<script setup lang="ts">
useSeoMeta({
  title: 'About Us',
  description: 'Learn more about our vision, values, and team.'
});

import AboutHeader from "./components/AboutHeader.vue";
import AboutBanner from "./components/AboutBanner.vue";
import AboutContent from "./components/AboutContent.vue";
</script>

<template>
  <section class="about">
    <div class="container about__content">
      <AboutHeader />
      <div class="about__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4">
            <AboutBanner />
          </div>
          <div class="col-12 col-lg-8">
            <AboutContent />
          </div>
        </div>
        <CheckOutRecipesSection />
      </div>
    </div>
  </section>
</template>