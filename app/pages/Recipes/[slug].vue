<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { recipes } from "../../data/recipes";
const route = useRoute();
const recipe = recipes.find((r) => r.slug === route.params.slug);

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: "Recipe Not Found" });
}
</script>

<template>
  <div class="container recipe-page">
    <NuxtLink to="/" class="back-btn">← Back Home</NuxtLink>

    <div class="recipe-layout">
      <div class="recipe-info">
        <span class="badge">{{ recipe.category }}</span>
        <h1>{{ recipe.title }}</h1>
        <p class="description">{{ recipe.description }}</p>

        <div class="metrics">
          <div class="metric">
            <span class="label">Time</span>
            <span class="val">{{ recipe.time }}</span>
          </div>
          <div class="metric">
            <span class="label">Servings</span>
            <span class="val">{{ recipe.servings }}</span>
          </div>
          <div class="metric">
            <span class="label">Calories</span>
            <span class="val">{{ recipe.calories }}</span>
          </div>
        </div>

        <div class="ingredients-box">
          <h3>Ingredients</h3>
          <ul>
            <li v-for="(item, idx) in recipe.ingredients" :key="idx">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="recipe-process">
        <div class="hero-img">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>

        <div class="steps">
          <h3>Instructions</h3>
          <div v-for="(step, idx) in recipe.steps" :key="idx" class="step-item">
            <div class="step-num">{{ idx + 1 }}</div>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
