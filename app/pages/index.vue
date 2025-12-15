<script setup lang="ts">
import { recipes } from "../data/recipes";
const featuredRecipes = recipes.slice(0, 3);
</script>

<template>
  <div>
    <HeroSection />
    <CategoriesSection />
    <section class="container mt-lg mb-lg">
      <div class="section-header text-center">
        <h2>Latest Recipes</h2>
        <p>Fresh from our kitchen to yours.</p>
      </div>
      <div class="grid-3">
        <RecipeCard
          v-for="recipe in featuredRecipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </section>
  </div>
</template>
