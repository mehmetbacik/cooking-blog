<script setup lang="ts">
import { checkOutRecipesData } from "../../data/checkOutRecipesData";

import CheckOutRecipesHeader from "./components/CheckOutRecipesHeader.vue";
import CheckOutRecipesList from "./components/CheckOutRecipesList.vue";
</script>

<template>
  <section class="checkOutRecipes">
    <div class="container checkOutRecipes__content">
      <CheckOutRecipesHeader />
      <CheckOutRecipesList :checkOutRecipes="checkOutRecipesData" />
    </div>
  </section>
</template>
