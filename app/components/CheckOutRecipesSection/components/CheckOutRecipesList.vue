<script setup lang="ts">
import type { CheckOutRecipeItem } from "../../../types";
import CheckOutRecipesCard from "./CheckOutRecipesCard.vue";
defineProps<{
  checkOutRecipes: CheckOutRecipeItem[];
}>();
</script>

<template >
  <div class="checkOutRecipes__list">
    <template
      v-for="(checkOutRecipe, index) in checkOutRecipes"
      :key="checkOutRecipe.id"
    >
      <CheckOutRecipesCard :checkOutRecipe="checkOutRecipe" />
    </template>
  </div>
</template>
