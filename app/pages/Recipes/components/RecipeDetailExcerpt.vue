<script setup>
defineProps({ recipe: Object });
</script>

<template>
  <div class="recipeDetail__excerptWrapper">
    <p v-if="recipe.excerpt">{{ recipe.excerpt }}</p>
  </div>
</template>
