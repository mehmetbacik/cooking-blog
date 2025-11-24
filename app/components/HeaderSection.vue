<script setup lang="ts">
import { navItems } from "../data/navData";
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
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
