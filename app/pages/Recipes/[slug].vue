<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";

import { simpleRecipesData } from "../../data/simpleRecipesData";
import { deliciousRecipesData } from "../../data/deliciousRecipesData";
import { tastyRecipesData } from "../../data/tastyRecipesData";
import { recipesData } from "../../data/recipesData";

import { socialItems } from "../../data/socialData";

import type { DerivedRecipe } from "../../types";
import BaseAdd from "~/ui/BaseAdd.vue";

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

const printPage = () => {
  window.print();
};

const showSharePopup = ref(false);
const shareRef = ref<HTMLElement | null>(null);
const shareUrl = ref("");

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

const copyLink = () => {
  navigator.clipboard.writeText(shareUrl.value);
  alert("Link copied!");
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside),
);

const isPlayingVideo = ref(false);

const playVideo = () => {
  isPlayingVideo.value = true;
};

const DESCRIPTION_LIMIT = 70;

const shortDescription = computed(() => {
  if (!recipe.description) return "";
  return recipe.description.length > DESCRIPTION_LIMIT
    ? recipe.description.slice(0, DESCRIPTION_LIMIT) + "..."
    : recipe.description;
});

const isDescriptionLong = computed(() => {
  return recipe.description && recipe.description.length > DESCRIPTION_LIMIT;
});

//console.log("ROUTE SLUG:", slug);
//console.log("FOUND IN recipesData:", recipesData.find(r => r.slug === slug));
</script>

<template>
  <div class="recipeDetail">
    <div class="container recipeDetail__content">
      <div class="recipeDetail__headerLayout">
        <div class="recipeDetail__header">
          <div class="recipeDetail__headline">
            <h1 class="recipeDetail__headline-title">{{ recipe.title }}</h1>
            <div class="recipeDetail__headline-info">
              <div class="recipeDetail__headline-infoAuthor">
                <div class="recipeDetail__headline-infoAuthor-photo">
                  <img :src="recipe.photo" :alt="recipe.author" />
                </div>
                <div class="recipeDetail__headline-infoAuthor-detail">
                  <span class="recipeDetail__author">{{ recipe.author }}</span>
                  <span class="recipeDetail__date">{{ recipe.date }}</span>
                </div>
              </div>
              <div class="recipeDetail__headline-infoPrepTime">
                <div class="recipeDetail__prepTime-content">
                  <span class="recipeDetail__prepTime-label">Prep Time</span>
                  <span class="recipeDetail__prepTime-val">{{
                    recipe.preptime
                  }}</span>
                </div>
              </div>
              <div class="recipeDetail__headline-infoTime">
                <div class="recipeDetail__infoTime-content">
                  <span class="recipeDetail__infoTime-label">Cook Time</span>
                  <span class="recipeDetail__infoTime-val">{{
                    recipe.time
                  }}</span>
                </div>
              </div>
              <div class="recipeDetail__headline-infoCategory">
                <span>{{ recipe.category || "Unknown" }}</span>
              </div>
            </div>
          </div>
          <div class="recipeDetail__actions">
            <div class="recipeDetail__actions-printWrapper">
              <button class="recipeDetail__actions-printBtn" @click="printPage">
                <img src="/icons/print.svg" alt="Print Icon" />
              </button>
              <span>Print</span>
            </div>
            <div class="recipeDetail__actions-shareWrapper">
              <button
                class="recipeDetail__actions-shareBtn"
                @click.stop="toggleSharePopup"
              >
                <img src="/icons/share.svg" alt="Share Icon" />
              </button>
              <span>Share</span>
              <div
                v-if="showSharePopup"
                class="recipeDetail__actions-sharePopup"
              >
                <div
                  class="recipeDetail__actions-sharePopupContent"
                  ref="shareRef"
                >
                  <span class="recipeDetail__actions-sharePopupTitle"
                    >Share this Recipe</span
                  >
                  <p class="recipeDetail__actions-sharePopupDesc">
                    Love this recipe? Share it with your friends!
                  </p>
                  <div class="recipeDetail__actions-sharePopupLinkBox">
                    <input type="text" :value="recipe.slug" readonly />
                    <button @click="copyLink">Copy</button>
                  </div>
                  <div class="recipeDetail__actions-sharePopupIcons">
                    <a
                      v-for="(item, idx) in socialItems"
                      :key="idx"
                      :href="item.link"
                      target="_blank"
                      class="recipeDetail__actions-sharePopupShareIcon"
                    >
                      <img :src="item.iconUrl" :alt="item.name" />
                      <span
                        class="recipeDetail__actions-sharePopupShareIconName"
                        >{{ item.name }}</span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recipeDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <div class="recipeDetail__imageWrapper">
              <div
                v-if="isPlayingVideo && recipe.videoUrl"
                class="recipeDetail__videoContainer"
              >
                <iframe
                  :src="`https://www.youtube.com/embed/${recipe.videoUrl}?autoplay=1`"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  class="recipeDetail__videoIframe"
                ></iframe>
              </div>
              <div class="recipeDetail__imageContainer" v-else>
                <img
                  :src="recipe.image"
                  :alt="recipe.title"
                  class="recipeDetail__image"
                />
                <button
                  v-if="recipe.videoUrl"
                  class="recipeDetail__playBtn"
                  @click="playVideo"
                >
                  <img src="/icons/playImage.svg" alt="Play" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="recipeDetail__nutritionInformationWrapper">
              <div class="recipeDetail__nutritionInformationContent">
                <h3 class="recipeDetail__nutritionInformationTitle">
                  Nutrition Information
                </h3>
                <div class="recipeDetail__nutritionInformationMetrics">
                  <div class="recipeDetail__nutritionInformationMetric">
                    <span class="recipeDetail__label">Calories</span>
                    <span v-if="recipe.calories" class="recipeDetail__val"
                      >{{ recipe.calories || "N/A" }}&nbsp;kcal</span
                    >
                    <span v-else class="recipeDetail__val"
                      >Info coming soon</span
                    >
                  </div>
                  <div class="recipeDetail__nutritionInformationMetric">
                    <span class="recipeDetail__label">Total Fat</span>
                    <span v-if="recipe.fat" class="recipeDetail__val"
                      >{{ recipe.fat || "N/A" }}&nbsp;g</span
                    >
                    <span v-else class="recipeDetail__val"
                      >Info coming soon</span
                    >
                  </div>
                  <div class="recipeDetail__nutritionInformationMetric">
                    <span class="recipeDetail__label">Protein</span>
                    <span v-if="recipe.protein" class="recipeDetail__val"
                      >{{ recipe.protein || "N/A" }}&nbsp;g</span
                    >
                    <span v-else class="recipeDetail__val"
                      >Info coming soon</span
                    >
                  </div>
                  <div class="recipeDetail__nutritionInformationMetric">
                    <span class="recipeDetail__label">Carbohydrate</span>
                    <span v-if="recipe.carbohydrate" class="recipeDetail__val"
                      >{{ recipe.carbohydrate || "N/A" }}&nbsp;g</span
                    >
                    <span v-else class="recipeDetail__val"
                      >Info coming soon</span
                    >
                  </div>
                  <div class="recipeDetail__nutritionInformationMetric">
                    <span class="recipeDetail__label">Cholesterol</span>
                    <span v-if="recipe.cholesterol" class="recipeDetail__val"
                      >{{ recipe.cholesterol || "N/A" }}&nbsp;mg</span
                    >
                    <span v-else class="recipeDetail__val"
                      >Info coming soon</span
                    >
                  </div>
                </div>
              </div>
              <p
                v-if="recipe.description"
                class="recipeDetail__description"
                :title="isDescriptionLong ? recipe.description : ''"
              >
                {{ shortDescription }}
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12">
            <div class="recipeDetail__excerptWrapper">
              <p v-if="recipe.excerpt">
                {{ recipe.excerpt }}
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <div
              v-if="recipe.ingredients?.length"
              class="recipeDetail__ingredientsWrapper"
            >
              <h3 class="recipeDetail__ingredientsTitle">Ingredients</h3>
              <div
                v-for="(section, sIdx) in recipe.ingredients"
                :key="sIdx"
                class="recipeDetail__ingredientsContent"
              >
                <h4
                  v-if="section.title"
                  class="recipeDetail__ingredientsContent-sectionTitle"
                >
                  {{ section.title }}
                </h4>
                <ul class="recipeDetail__ingredientsContent-checklist">
                  <li
                    v-for="(item, iIdx) in section.items"
                    :key="iIdx"
                    class="recipeDetail__ingredientsContent-checklistItem"
                    :class="{
                      'is-checked': checkedIngredients.has(`${sIdx}-${iIdx}`),
                    }"
                    @click="toggleIngredient(sIdx, iIdx)"
                  >
                    <div class="recipeDetail__ingredientsContent-checkbox">
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
                    <span class="recipeDetail__ingredientsContent-text">{{
                      item
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else>
              <span class="recipeDetail__ingredientsContent-text"
                >Ingredients for this recipe are being prepared.</span
              >
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
                    <svg v-else>...</svg>
                  </div>
                  <div class="step-content">
                    <h4 v-if="step.title" class="step-title">
                      {{ step.title }}
                    </h4>
                    <p v-if="step.text" class="step-text">
                      {{ step.text }}
                    </p>
                    <img
                      v-if="step.image"
                      :src="step.image"
                      :alt="step.title || step.text"
                      class="step-image"
                    />
                    <p v-if="step.text2" class="step-text">
                      {{ step.text2 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <span>
                Detailed instructions are being prepared for this recipe.
              </span>
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
