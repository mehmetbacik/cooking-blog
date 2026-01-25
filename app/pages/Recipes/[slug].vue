<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";

import { simpleRecipesData } from "../../data/simpleRecipesData";
import { deliciousRecipesData } from "../../data/deliciousRecipesData";
import { tastyRecipesData } from "../../data/tastyRecipesData";
import { recipesData } from "../../data/recipesData";

const route = useRoute();
const slug = route.params.slug;

const recipe =
  simpleRecipesData.find((r) => r.slug === slug) ||
  deliciousRecipesData.find((r) => r.slug === slug) ||
  tastyRecipesData.find((r) => r.slug === slug) ||
  recipesData.find((r) => r.slug === slug);

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: "Recipe Not Found" });
}
</script>

<template>
  <div class="recipeDetail">
    <div class="container recipeDetail__content">
      <div class="recipeDetail__headerLayout">
        <div class="recipeDetail__header">
          <h1 class="recipeDetail__title">{{ recipe.title }}</h1>
        </div>
      </div>
      <div class="recipeDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <img :src="recipe.image" :alt="recipe.title" class="image" />
          </div>
          <div class="col-12 col-lg-4">
            <div class="recipe-info">
              <span class="badge">{{ recipe.category }}</span>
              <div class="metrics">
                <div class="metric">
                  <span class="label">Time</span>
                  <span class="val">{{ recipe.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckOutRecipesSection />
    </div>
  </div>
</template>
