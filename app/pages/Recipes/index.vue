<script setup lang="ts">
import { recipes } from "../../data/recipes";
</script>

<template>
  <div class="container page-wrapper">
    <div class="header-block">
      <h1>Culinary Stories</h1>
      <p>Tips, techniques, and tales from the kitchen.</p>
    </div>

    <div class="recipes-grid">
      <article v-for="recipe in recipes" :key="recipe.id" class="recipes-entry">
        <div class="entry-image">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>
        <div class="entry-content">
          <span class="cat-tag">{{ recipe.category }}</span>
          <NuxtLink :to="`/recipes/${recipe.slug}`">
            <h2>{{ recipe.title }}</h2>
          </NuxtLink>
          <p>{{ recipe.servings }} • {{ recipe.time }}</p>
        </div>
      </article>
    </div>
  </div>
</template>
