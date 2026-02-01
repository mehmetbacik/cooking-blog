<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";

import { simpleRecipesData } from "../../data/simpleRecipesData";
import { deliciousRecipesData } from "../../data/deliciousRecipesData";
import { tastyRecipesData } from "../../data/tastyRecipesData";
import { recipesData } from "../../data/recipesData";

import type { DerivedRecipe } from "~/types";

const route = useRoute();
const slug = route.params.slug;

const recipe = (simpleRecipesData.find((r) => r.slug === slug) ||
  deliciousRecipesData.find((r) => r.slug === slug) ||
  tastyRecipesData.find((r) => r.slug === slug) ||
  recipesData.find((r) => r.slug === slug)) as DerivedRecipe;

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: "Recipe Not Found" });
}

const checkedIngredients = ref<Set<string>>(new Set());
const checkedSteps = ref<Set<number>>(new Set());

const toggleIngredient = (sectionIdx: number, itemIdx: number) => {
  const key = `${sectionIdx}-${itemIdx}`;
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

//console.log("ROUTE SLUG:", slug);
//console.log("FOUND IN recipesData:", recipesData.find(r => r.slug === slug));

</script>

<template>
  <div class="recipeDetail">
    <div class="container recipeDetail__content">
      <div class="recipeDetail__headerLayout">
        <div class="recipeDetail__header">
          <h1 class="recipeDetail__title">{{ recipe.title }}</h1>
          <p v-if="recipe.description" class="recipeDetail__description">
            {{ recipe.description }}
          </p>
          <p v-else class="recipeDetail__description">
            <em>Description for this recipe is being prepared.</em>
          </p>
        </div>
      </div>
      <div class="recipeDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <div class="image-wrapper">
              <img
                :src="recipe.image"
                :alt="recipe.title"
                class="image"
              />
            </div>
            <div v-if="recipe.steps?.length" class="steps-wrapper">
              <h3 class="section-heading">Instructions</h3>
              <div class="steps-list">
                <div
                  v-for="(step, idx) in recipe.steps"
                  :key="idx"
                  class="step-item"
                  :class="{ 'is-completed': checkedSteps.has(idx) }"
                  @click="toggleStep(idx)"
                >
                  <div class="step-marker">
                    <span v-if="!checkedSteps.has(idx)">{{ idx + 1 }}</span>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="check-icon-step"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="step-text">{{ step }}</p>
                </div>
              </div>
            </div>
            <div v-else >
              <p>
                <em
                  >Detailed instructions are being prepared for this recipe.</em
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="recipe-info">
              <span class="badge">{{ recipe.category || "Unknown" }}</span>
              <div class="metrics">
                <div class="metric">
                  <span class="label">Time</span>
                  <span class="val">{{ recipe.time || "N/A" }}</span>
                </div>
                <div v-if="recipe.servings" class="metric">
                  <span class="label">Servings</span>
                  <span class="val">{{ recipe.servings }}</span>
                </div>
                <div v-else class="metric">
                  <span class="label">Servings</span>
                  <span class="val text-muted">Info coming soon</span>
                </div>
                <div v-if="recipe.calories" class="metric">
                  <span class="label">Calories</span>
                  <span class="val">{{ recipe.calories }}</span>
                </div>
                <div v-else class="metric">
                  <span class="label">Calories</span>
                  <span class="val text-muted">Info coming soon</span>
                </div>
              </div>
              <div
                v-if="recipe.ingredients?.length"
                class="ingredients-box"
              >
                <h3 class="section-heading">Ingredients</h3>
                <div
                  v-for="(section, sIdx) in recipe.ingredients"
                  :key="sIdx"
                  class="ingredient-section"
                >
                  <h4 v-if="section.title" class="section-title">
                    {{ section.title }}
                  </h4>
                  <ul class="checklist">
                    <li
                      v-for="(item, iIdx) in section.items"
                      :key="iIdx"
                      class="checklist-item"
                      :class="{
                        'is-checked': checkedIngredients.has(`${sIdx}-${iIdx}`),
                      }"
                      @click="toggleIngredient(sIdx, iIdx)"
                    >
                      <div class="checkbox">
                        <svg
                          v-if="checkedIngredients.has(`${sIdx}-${iIdx}`)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="check-icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <span class="text">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-else>
                <em>Ingredients for this recipe are being prepared.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckOutRecipesSection />
    </div>
  </div>
</template>
