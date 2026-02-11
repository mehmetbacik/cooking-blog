<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";

import { simpleRecipesData } from "../../data/simpleRecipesData";
import { deliciousRecipesData } from "../../data/deliciousRecipesData";
import { tastyRecipesData } from "../../data/tastyRecipesData";
import { recipesData } from "../../data/recipesData";

import RecipeDetailHeader from "./components/RecipeDetailHeader.vue";
import RecipeDetailMedia from "./components/RecipeDetailMedia.vue";
import RecipeDetailNutrition from "./components/RecipeDetailNutrition.vue";
import RecipeDetailExcerpt from "./components/RecipeDetailExcerpt.vue";
import RecipeDetailIngredients from "./components/RecipeDetailIngredients.vue";
import RecipeDetailSteps from "./components/RecipeDetailSteps.vue";
import BaseAdd from "../../ui/BaseAdd.vue"


const route = useRoute();
const slug = route.params.slug;

const recipe =
  simpleRecipesData.find((r) => r.slug === slug) ||
  deliciousRecipesData.find((r) => r.slug === slug) ||
  tastyRecipesData.find((r) => r.slug === slug) ||
  recipesData.find((r) => r.slug === slug);

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: "Recipe Not Found" });
}

const checkedIngredients = ref<Set<string>>(new Set());
const checkedSteps = ref<Set<number>>(new Set());

const toggleIngredient = (sectionIdx: number, itemIdx: number) => {
  const key = `${sectionIdx}-${itemIdx}`;
  checkedIngredients.value.has(key)
    ? checkedIngredients.value.delete(key)
    : checkedIngredients.value.add(key);
};

const toggleStep = (idx: number) => {
  checkedSteps.value.has(idx)
    ? checkedSteps.value.delete(idx)
    : checkedSteps.value.add(idx);
};

const printPage = () => window.print();

const showSharePopup = ref(false);
const shareUrl = ref("");
const shareRef = ref<HTMLElement | null>(null);

onMounted(() => {
  shareUrl.value = window.location.href;
});

const toggleSharePopup = () => {
  showSharePopup.value = !showSharePopup.value;
};

const handleClickOutside = (e: MouseEvent) => {
  if (
    showSharePopup.value &&
    shareRef.value &&
    !shareRef.value.contains(e.target as Node)
  ) {
    showSharePopup.value = false;
  }
};
onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);

const isPlayingVideo = ref(false);
const playVideo = () => (isPlayingVideo.value = true);
</script>

<template>
  <div class="recipeDetail">
    <div class="container recipeDetail__content">
      <RecipeDetailHeader
        :recipe="recipe"
        :share-url="shareUrl"
        :show-share-popup="showSharePopup"
        @toggleShare="toggleSharePopup"
        @print="printPage"
      />
      <div class="recipeDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <RecipeDetailMedia
              :recipe="recipe"
              :is-playing="isPlayingVideo"
              @play="playVideo"
            />
          </div>
          <div class="col-12 col-lg-4">
            <RecipeDetailNutrition :recipe="recipe" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12">
            <RecipeDetailExcerpt :recipe="recipe" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <RecipeDetailIngredients
              :recipe="recipe"
              :checked="checkedIngredients"
              @toggle="toggleIngredient"
            />
            <RecipeDetailSteps
              :recipe="recipe"
              :checked="checkedSteps"
              @toggle="toggleStep"
            />
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
