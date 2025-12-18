<script setup lang="ts">
import type { SimpleRecipeItem } from "../../../types";
import SimpleRecipesCard from "./SimpleRecipesCard.vue";
defineProps<{
  simpleRecipes: SimpleRecipeItem[];
}>();
</script>

<template>
  <div class="simpleRecipes__list">
    <SimpleRecipesCard
      v-for="simpleRecipe in simpleRecipes"
      :key="simpleRecipe.id"
      :simpleRecipe="simpleRecipe"
    />
  </div>
</template>
