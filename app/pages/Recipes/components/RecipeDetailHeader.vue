<script setup lang="ts">
defineProps<{
  title?: string;
  authorName?: string;
  authorPhoto?: string;
  date?: string;
  prepTime?: string;
  cookTime?: string;
  category?: string;
}>();
</script>

<template>
  <div class="recipeDetail__headline">
    <h1 class="recipeDetail__headline-title">
      {{ title || "Healthy Japanese Fried Rice" }}
    </h1>
    <div class="recipeDetail__headline-info">
      <div class="recipeDetail__headline-infoAuthor">
        <div class="recipeDetail__headline-infoAuthor-photo">
          <img
            :src="authorPhoto || '/images/recipe/author/author.png'"
            :alt="authorName"
          />
        </div>
        <div class="recipeDetail__headline-infoAuthor-detail">
          <span class="recipeDetail__author">{{
            authorName || "John Smith"
          }}</span>
          <span class="recipeDetail__date">{{ date || "12 March 2022" }}</span>
        </div>
      </div>
      <div class="recipeDetail__headline-infoPrepTime">
        <div class="recipeDetail__prepTime-content">
          <span class="recipeDetail__prepTime-label">Prep Time</span>
          <span class="recipeDetail__prepTime-val">{{
            prepTime || "15 Minutes"
          }}</span>
        </div>
      </div>
      <div class="recipeDetail__headline-infoTime">
        <div class="recipeDetail__infoTime-content">
          <span class="recipeDetail__infoTime-label">Cook Time</span>
          <span class="recipeDetail__infoTime-val">{{
            cookTime || "30 Minutes"
          }}</span>
        </div>
      </div>
      <div class="recipeDetail__headline-infoCategory">
        <span>{{ category || "Chicken" }}</span>
      </div>
    </div>
  </div>
</template>
