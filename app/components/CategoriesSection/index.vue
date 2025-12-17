<script setup lang="ts">
import { categoriesData } from "../../data/categoriesData";

import CategoriesHeader from "./components/CategoriesHeader.vue";
import CategoriesList from "./components/CategoriesList.vue";
</script>

<template>
  <section class="categories">
    <div class="container categories__content">
      <CategoriesHeader />
      <CategoriesList :categories="categoriesData" />
    </div>
  </section>
</template>
