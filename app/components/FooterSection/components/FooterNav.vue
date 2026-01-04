<script setup lang="ts">
import { navItems } from "../../../data/footerNavData";
</script>

<template>
  <div class="footer__nav-wrapper">
    <nav class="footer__nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.link"
        class="footer__nav-item"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
