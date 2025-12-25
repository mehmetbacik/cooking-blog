<script setup lang="ts">
import type { CategoryItem } from "../../../types";

defineProps<{
  category: CategoryItem;
}>();
</script>

<template>
  <div class="categories__item">
    <NuxtLink :to="category.url" class="categories__link">
      <div class="categories__image-wrapper">
        <img
          :src="category.image"
          :alt="category.title"
          class="categories__image"
        />
      </div>
      <span class="categories__item-title">
        {{ category.title }}
      </span>
    </NuxtLink>
  </div>
</template>
