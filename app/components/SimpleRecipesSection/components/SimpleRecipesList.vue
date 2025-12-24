<script setup lang="ts">
import type { SimpleRecipeItem } from "../../../types";
import SimpleRecipesCard from "./SimpleRecipesCard.vue";
import SimpleRecipesAdsBanner from "./SimpleRecipesAdsBanner.vue";
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
      <SimpleRecipesAdsBanner v-if="index === 4" />
    </template>
  </div>
</template>
