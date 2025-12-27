<script setup lang="ts">
const BannerPath = "/images/home/banner/homeBanner.png";
</script>

<template>
  <div class="homeBanner__media">
    <img :src="BannerPath" alt="Banner" loading="lazy" />
  </div>
</template>
