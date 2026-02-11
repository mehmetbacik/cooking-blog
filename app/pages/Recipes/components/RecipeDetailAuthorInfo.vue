<script setup>
defineProps({ recipe: Object });
</script>

<template>
  <div class="recipeDetail__headline-infoAuthor">
    <div class="recipeDetail__headline-infoAuthor-photo">
      <img
        :src="recipe.photo || '/images/recipe/author/author.png'"
        :alt="recipe.author || 'Author'"
      />
    </div>

    <div class="recipeDetail__headline-infoAuthor-detail">
      <span class="recipeDetail__author">{{
        recipe.author || "John Smith"
      }}</span>
      <span class="recipeDetail__date">{{
        recipe.date || "12 March 2022"
      }}</span>
    </div>
  </div>
</template>
