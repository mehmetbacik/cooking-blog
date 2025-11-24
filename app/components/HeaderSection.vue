<script setup lang="ts">
import { navItems } from "../data/navData";
import { socialItems } from "../data/socialData";
</script>

<template>
  <nav class="navbar">
    <div class="container navbar__content">
      <NuxtLink to="/" class="navbar__logo">
        <span>Cooking Blog</span>
      </NuxtLink>
      <div class="navbar__links">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink :to="item.link" class="nav-item" active-class="active">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar__socials">
        <div class="social-links">
          <a
            v-for="social in socialItems"
            :key="social.id"
            :href="social.link"
            target="_blank"
            :aria-label="social.name"
            class="social-item"
          >
            <img :src="social.iconUrl" :alt="social.name" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
