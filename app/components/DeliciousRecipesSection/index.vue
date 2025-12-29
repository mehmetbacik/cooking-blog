<script setup lang="ts">
import { deliciousRecipesData } from "../../data/deliciousRecipesData";

import DeliciousRecipesHeader from "./components/DeliciousRecipesHeader.vue";
import DeliciousRecipesList from "./components/DeliciousRecipesList.vue";
</script>

<template>
  <section class="deliciousRecipes">
    <div class="container deliciousRecipes__content">
      <DeliciousRecipesHeader />
      <DeliciousRecipesList :deliciousRecipes="deliciousRecipesData" />
    </div>
  </section>
</template>
