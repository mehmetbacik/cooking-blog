<script setup lang="ts">
import { socialItems } from "../../../data/socialData";
</script>

<template>
  <div class="footer__social">
    <NuxtLink
      v-for="social in socialItems"
      :key="social.id"
      :to="social.link"
      target="_blank"
      class="footer__social-item"
      :aria-label="social.name"
    >
      <img :src="social.iconUrl" :alt="social.name" />
    </NuxtLink>
  </div>
</template>
