<script setup lang="ts">
import { recipes } from "../data/recipes";
const featuredRecipes = recipes.slice(0, 3);
</script>

<template>
  <div>
    <HeroSection />
    <CategoriesSection />
    <SimpleRecipes />
    <RecipeCard
      v-for="recipe in featuredRecipes"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>
