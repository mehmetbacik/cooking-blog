<script setup lang="ts">
import type { TastyRecipeItem } from "../../../types";
import TastyRecipesCard from "./TastyRecipesCard.vue";
defineProps<{
  tastyRecipes: TastyRecipeItem[];
}>();
</script>

<template >
  <div class="tastyRecipes__list">
    <template
      v-for="(tastyRecipe, index) in tastyRecipes"
      :key="tastyRecipe.id"
    >
      <TastyRecipesCard :tastyRecipe="tastyRecipe" />
    </template>
  </div>
</template>
s