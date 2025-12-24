<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { SimpleRecipeItem } from "../../../types";
import { useFavorites } from "../../../helpers/useFavorites";
import { useTextTruncation } from "../../../helpers/useTextTruncation";

const props = defineProps<{
  simpleRecipe: SimpleRecipeItem;
}>();

const { isFavorite, toggleFavorite } = useFavorites();

const isAnimating = ref(false);

const onToggleFavorite = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();

  toggleFavorite(props.simpleRecipe.id);
  animate();
};

const animate = () => {
  isAnimating.value = true;
  setTimeout(() => (isAnimating.value = false), 400);
};

const { truncatedTitle } = useTextTruncation(props.simpleRecipe.title);
</script>

<template>
  <div class="simpleRecipes__item">
    <NuxtLink :to="`/recipes/${simpleRecipe.slug}`" class="simpleRecipes__link">
      <div class="simpleRecipes__image-wrapper">
        <button
          class="fav-btn"
          :class="{ active: isFavorite(simpleRecipe.id), pop: isAnimating }"
          @click="onToggleFavorite"
          :aria-pressed="isFavorite(simpleRecipe.id)"
          aria-label="Favorite"
        >
          <svg
            class="heart-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M11.645 20.91a.75.75 0 01-.704 0l-.003-.001-.007-.004-.022-.012a15.247 15.247 0 01-.383-.219 25.175 25.175 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.18 25.18 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003-.003.001z"
            />
          </svg>
        </button>

        <img
          :src="simpleRecipe.image"
          :alt="simpleRecipe.title"
          class="simpleRecipes__image"
          loading="lazy"
        />
      </div>

      <span class="simpleRecipes__item-title">
        {{ truncatedTitle }}
      </span>
      <div class="simpleRecipes__item-meta">
        <span class="simpleRecipes__item-time">
          {{ simpleRecipe.time }}
        </span>
        <span class="simpleRecipes__item-category">
          {{ simpleRecipe.category }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
