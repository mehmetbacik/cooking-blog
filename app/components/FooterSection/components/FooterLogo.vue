<script setup lang="ts">
const logoPath = "/images/logo.svg";
</script>

<template>
  <div class="footer__logo-wrapper">
    <NuxtLink to="/" class="footer__logo">
      <img :src="logoPath" alt="Logo" />
    </NuxtLink>

    <p class="footer__logo-desc">
      Lorem ipsum dolor sit amet, consectetuipisicing elit
    </p>
  </div>
</template>
