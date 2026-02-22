<script setup lang="ts">
defineProps<{
  recipe: {
    excerpt?: string;
  };
}>();
</script>

<template>
  <div class="recipeDetail__excerptWrapper">
    <p v-if="recipe.excerpt">{{ recipe.excerpt }}</p>
  </div>
</template>
