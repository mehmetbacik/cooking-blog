<script setup lang="ts">
import { tastyRecipesData } from "../../data/tastyRecipesData";

import TastyRecipesHeader from "./components/TastyRecipesHeader.vue";
import TastyRecipesList from "./components/TastyRecipesList.vue";
</script>

<template>
  <section class="tastyRecipes">
    <div class="container tastyRecipes__content">
      <TastyRecipesHeader />
      <TastyRecipesList :tastyRecipes="tastyRecipesData" />
    </div>
  </section>
</template>
