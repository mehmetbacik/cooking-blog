<script setup lang="ts">
import type { SimpleRecipeItem } from "../../../types";
import SimpleRecipesCard from "./SimpleRecipesCard.vue";
import SimpleRecipesAdBanner from "./SimpleRecipesAdBanner.vue";
defineProps<{
  simpleRecipes: SimpleRecipeItem[];
}>();
</script>

<template >
  <div class="simpleRecipes__list">
    <template
      v-for="(simpleRecipe, index) in simpleRecipes"
      :key="simpleRecipe.id"
    >
      <SimpleRecipesCard :simpleRecipe="simpleRecipe" />
      <SimpleRecipesAdBanner v-if="index === 4" />
    </template>
  </div>
</template>
