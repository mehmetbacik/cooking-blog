<script setup lang="ts">
import InstagramHeader from "./components/InstagramHeader.vue";
import InstagramPosts from "./components/InstagramPosts.vue";
import InstagramCta from "./components/InstagramCta.vue";
</script>

<template>
  <section class="homeInstagram">
    <div class="container homeInstagram__content">
      <InstagramHeader />
      <InstagramPosts />
      <InstagramCta />
    </div>
  </section>
</template>
