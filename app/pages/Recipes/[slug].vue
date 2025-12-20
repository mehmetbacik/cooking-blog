<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { simpleRecipesData } from "../../data/simpleRecipesData";
const route = useRoute();
const recipe = simpleRecipesData.find((r) => r.slug === route.params.slug);

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: "Recipe Not Found" });
}
</script>

<template>
  <div class="container recipe-page">
    <NuxtLink to="/" class="back-btn">← Back Home</NuxtLink>

    <div class="recipe-layout">
      <div class="recipe-info">
        <img :src="recipe.image" :alt="recipe.title" class="image" />
        <span class="badge">{{ recipe.category }}</span>
        <h1>{{ recipe.title }}</h1>

        <div class="metrics">
          <div class="metric">
            <span class="label">Time</span>
            <span class="val">{{ recipe.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
