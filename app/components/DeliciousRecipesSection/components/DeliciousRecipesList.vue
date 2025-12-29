<script setup lang="ts">
import type { DeliciousRecipeItem } from "../../../types";
import DeliciousRecipesCard from "./DeliciousRecipesCard.vue";
defineProps<{
  deliciousRecipes: DeliciousRecipeItem[];
}>();
</script>

<template >
  <div class="deliciousRecipes__list">
    <template
      v-for="(deliciousRecipe, index) in deliciousRecipes"
      :key="deliciousRecipe.id"
    >
      <DeliciousRecipesCard :deliciousRecipe="deliciousRecipe" />
    </template>
  </div>
</template>
