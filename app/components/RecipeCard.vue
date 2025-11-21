<script setup lang="ts">
import { defineProps } from "vue";
import type { Recipe } from "../types";

defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <NuxtLink :to="`/recipes/${recipe.slug}`" class="recipe-card">
    <div class="card-image">
      <img :src="recipe.image" :alt="recipe.title" />
    </div>
    <div class="card-content">
      <span class="category">{{ recipe.category }}</span>
      <h3 class="title">{{ recipe.title }}</h3>
      <div class="meta">
        <span>{{ recipe.time }}</span>
        <span>{{ recipe.servings }} ppl</span>
      </div>
    </div>
  </NuxtLink>
</template>
