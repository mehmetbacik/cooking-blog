<script setup lang="ts">
import type { CategoryItem } from "../../../types";
import CategoriesCard from "./CategoriesCard.vue";

defineProps<{
  categories: CategoryItem[];
}>();
</script>

<template>
  <div class="categories__list">
    <CategoriesCard
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>
