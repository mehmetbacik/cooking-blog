<script setup lang="ts">
import { recipes } from "../data/recipes";
const featuredRecipes = recipes.slice(0, 3);
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="container hero-content">
        <h1>
          Master the Art of <br />
          <span class="highlight">Home Cooking</span>
        </h1>
        <p>
          Join our community of food lovers. Discover recipes, learn techniques,
          and share your passion.
        </p>
        <div class="hero-buttons">
          <NuxtLink to="/recipes/#" class="btn btn--primary"
            >Featured Recipe</NuxtLink
          >
          <NuxtLink to="/blog" class="btn-text">Read Blog →</NuxtLink>
        </div>
      </div>
    </section>
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