<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";

import { simpleRecipesData } from "../../data/simpleRecipesData";
import { deliciousRecipesData } from "../../data/deliciousRecipesData";
import { tastyRecipesData } from "../../data/tastyRecipesData";
import { recipesData } from "../../data/recipesData";
import type { DerivedRecipe } from "../../types";

import RecipeDetailHeader from "./components/RecipeDetailHeader.vue";
import RecipeDetailActions from "./components/RecipeDetailActions.vue";
import RecipeDetailMedia from "./components/RecipeDetailMedia.vue";
import RecipeDetailNutrition from "./components/RecipeDetailNutrition.vue";
import RecipeDetailExcerpt from "./components/RecipeDetailExcerpt.vue";
import RecipeDetailIngredients from "./components/RecipeDetailIngredients.vue";
import RecipeDetailInstructions from "./components/RecipeDetailInstructions.vue";
import BaseAdd from "../../ui/BaseAdd.vue";

const route = useRoute();
const slug = route.params.slug as string;

const recipe = (simpleRecipesData.find((r) => r.slug === slug) ||
  deliciousRecipesData.find((r) => r.slug === slug) ||
  tastyRecipesData.find((r) => r.slug === slug) ||
  recipesData.find((r) => r.slug === slug)) as DerivedRecipe;

if (!recipe) {
  throw createError({
    status: 404,
    message: "Recipe Not Found",
  });
}

const checkedIngredients = ref<Set<string>>(new Set());
const checkedSteps = ref<Set<number>>(new Set());

const toggleIngredient = (sIdx: number, iIdx: number) => {
  const key = `${sIdx}-${iIdx}`;
  if (checkedIngredients.value.has(key)) {
    checkedIngredients.value.delete(key);
  } else {
    checkedIngredients.value.add(key);
  }
};

const toggleStep = (idx: number) => {
  if (checkedSteps.value.has(idx)) {
    checkedSteps.value.delete(idx);
  } else {
    checkedSteps.value.add(idx);
  }
};

const printPage = () => window.print();
</script>

<template>
  <div class="recipeDetail">
    <div class="container recipeDetail__content">
      <div class="recipeDetail__headerLayout">
        <div class="recipeDetail__header">
          <RecipeDetailHeader
            :title="recipe.title || ''"
            :authorName="recipe.author || 'Anonymous'"
            :authorPhoto="recipe.photo || ''"
            :date="recipe.date || ''"
            :prepTime="recipe.preptime || ''"
            :cookTime="recipe.time || ''"
            :category="recipe.category || ''"
          />
          <RecipeDetailActions :slug="recipe.slug || ''" @print="printPage" />
        </div>
      </div>

      <div class="recipeDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <RecipeDetailMedia
              :image="recipe.image || ''"
              :videoUrl="recipe.videoUrl"
              :alt="recipe.title || 'Recipe Image'"
            />
          </div>
          <div class="col-12 col-lg-4">
            <RecipeDetailNutrition
              :description="recipe.description"
              :calories="recipe.calories?.toString()"
              :fat="recipe.fat?.toString()"
              :protein="recipe.protein?.toString()"
              :carbs="recipe.carbohydrate?.toString()"
              :cholesterol="recipe.cholesterol?.toString()"
            />
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-12">
            <RecipeDetailExcerpt :recipe="recipe" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-8">
            <RecipeDetailIngredients
              v-if="recipe.ingredients?.length"
              :ingredients="recipe.ingredients"
              :checkedSet="checkedIngredients"
              @toggle="toggleIngredient"
            />
            <div v-else class="recipeDetail__ingredientsContent-text">
              Ingredients for this recipe are being prepared.
            </div>

            <RecipeDetailInstructions
              v-if="recipe.steps?.length"
              :steps="recipe.steps"
              :checkedSet="checkedSteps"
              @toggle="toggleStep"
            />
            <div v-else>
              <span>Detailed instructions are being prepared.</span>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <TastyRecipesSection />
            <BaseAdd />
          </div>
        </div>
      </div>
      <CheckOutRecipesSection />
    </div>
  </div>
</template>
