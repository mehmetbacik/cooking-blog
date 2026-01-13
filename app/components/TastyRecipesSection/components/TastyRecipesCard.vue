<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { TastyRecipeItem } from "../../../types";
import { useTextTruncation } from "../../../helpers/useTextTruncation";

const props = defineProps<{
  tastyRecipe: TastyRecipeItem;
}>();

const { truncatedTitle } = useTextTruncation(props.tastyRecipe.title);
</script>

<template>
  <div class="tastyRecipes__item">
    <NuxtLink :to="`/recipes/${tastyRecipe.slug}`" class="tastyRecipes__link">
      <div class="tastyRecipes__item-content">
        <div class="tastyRecipes__image-wrapper">
          <img
            :src="tastyRecipe.image"
            :alt="tastyRecipe.title"
            class="tastyRecipes__image"
            loading="lazy"
          />
        </div>
        <div class="tastyRecipes__meta-wrapper">
          <span class="tastyRecipes__item-title">
            {{ truncatedTitle }}
          </span>
          <span class="tastyRecipes__item-author">
            By {{ tastyRecipe.author }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
