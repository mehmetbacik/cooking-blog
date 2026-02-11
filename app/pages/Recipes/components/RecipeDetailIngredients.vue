<script setup>
import RecipeDetailIngredientSection from "./RecipeDetailIngredientSection.vue";

defineProps({
  recipe: Object,
  checked: Set,
});
defineEmits(["toggle"]);
</script>

<template>
  <div
    v-if="recipe.ingredients?.length"
    class="recipeDetail__ingredientsWrapper"
  >
    <h3 class="recipeDetail__ingredientsTitle">Ingredients</h3>

    <RecipeDetailIngredientSection
      v-for="(section, sIdx) in recipe.ingredients"
      :key="sIdx"
      :section="section"
      :section-index="sIdx"
      :checked="checked"
      @toggle="toggle"
    />
  </div>

  <div v-else>
    <span class="recipeDetail__ingredientsContent-text">
      Ingredients for this recipe are being prepared.
    </span>
  </div>
</template>
