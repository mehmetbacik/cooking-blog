<script setup lang="ts">
import type { SimpleRecipeItem } from "../../../types";

defineProps<{
  simpleRecipe: SimpleRecipeItem;
}>();
</script>

<template>
  <div class="simpleRecipes__item">
    <a :href="simpleRecipe.slug" class="simpleRecipes__link">
      <div class="simpleRecipes__image-wrapper">
        <img
          :src="simpleRecipe.image"
          :alt="simpleRecipe.title"
          class="simpleRecipes__image"
        />
      </div>
      <span class="simpleRecipes__item-title">
        {{ simpleRecipe.title }}
      </span>
    </a>
  </div>
</template>
