<script setup lang="ts">
import { simpleRecipesData } from "../../data/simpleRecipesData";

import SimpleRecipesHeader from "./components/SimpleRecipesHeader.vue";
import SimpleRecipesList from "./components/SimpleRecipesList.vue";
</script>

<template>
  <section class="simpleRecipes">
    <div class="container simpleRecipes__content">
      <SimpleRecipesHeader />
      <SimpleRecipesList :simpleRecipes="simpleRecipesData" />
    </div>
  </section>
</template>
