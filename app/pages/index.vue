<script setup lang="ts">
import { recipes } from "../data/recipes";
const featuredRecipes = recipes.slice(0, 3);
</script>

<template>
  <div>
    <HeroSection />
    <CategoriesSection />
    <SimpleRecipesSection />
    <BannerSection />
    <InstagramSection />
    <DeliciousRecipesSection />
  </div>
</template>
