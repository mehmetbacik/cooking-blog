<script setup>
import RecipeDetailStepItem from "./RecipeDetailStepItem.vue";

defineProps({
  recipe: Object,
  checked: Set,
});
defineEmits(["toggle"]);
</script>

<template>
  <div v-if="recipe.steps?.length" class="recipeDetail__stepsWrapper">
    <h3 class="recipeDetail__stepsTitle">Directions</h3>

    <div class="recipeDetail__stepsList">
      <RecipeDetailStepItem
        v-for="(step, idx) in recipe.steps"
        :key="idx"
        :step="step"
        :index="idx"
        :checked="checked"
        @toggle="toggle"
      />
    </div>
  </div>

  <div v-else>
    <span>Detailed instructions are being prepared for this recipe.</span>
  </div>
</template>
