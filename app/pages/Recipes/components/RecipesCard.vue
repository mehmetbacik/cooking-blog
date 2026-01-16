<script setup lang="ts">
import type { RecipeItem } from "../../../types";
import { useTextTruncation } from "../../../helpers/useTextTruncation";

const props = defineProps<{
  recipe: RecipeItem;
}>();

const { truncatedTitle } = useTextTruncation(props.recipe.title);
</script>

<template>
  <article class="recipesList__item">
    <div class="recipesList__item-image">
      <img :src="recipe.image" :alt="recipe.title" loading="lazy" />
    </div>
    <div class="recipesList__item-content">
      <NuxtLink :to="`/recipes/${recipe.slug}`">
        <h2 class="recipesList__item-title">{{ truncatedTitle }}</h2>
      </NuxtLink>
      <p class="recipesList__item-description">{{ recipe.description }}</p>
      <div class="recipesList__item-meta">
        <div class="recipesList__item-category">
          <span>{{ recipe.category }}</span>
        </div>
        <div class="recipesList__item-time">
          <span>{{ recipe.time }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
