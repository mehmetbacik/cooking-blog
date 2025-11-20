<template>
  <nav class="navbar">
    <div class="container navbar__content">
      <NuxtLink to="/" class="navbar__logo">
        <span>Cooking Blog</span>
      </NuxtLink>
      <div class="navbar__links">
        <NuxtLink to="/" class="nav-item">Home</NuxtLink>
        <NuxtLink to="/recipes" class="nav-item">Recipes</NuxtLink>
        <NuxtLink to="/blog" class="nav-item">Blog</NuxtLink>
        <NuxtLink to="/contact" class="nav-item">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
