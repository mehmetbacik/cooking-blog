<script setup>
import RecipeDetailAuthorInfo from "./RecipeDetailAuthorInfo.vue";
import RecipeDetailActions from "./RecipeDetailActions.vue";

defineProps({
  recipe: Object,
  shareUrl: String,
  showSharePopup: Boolean,
});

defineEmits(["toggleShare", "print"]);
</script>

<template>
  <div class="recipeDetail__headerLayout">
    <div class="recipeDetail__header">
      <div class="recipeDetail__headline">
        <h1 class="recipeDetail__headline-title">
          {{ recipe.title || "Health Japanese Fried Rice" }}
        </h1>

        <div class="recipeDetail__headline-info">
          <RecipeDetailAuthorInfo :recipe="recipe" />

          <div class="recipeDetail__headline-infoPrepTime">
            <div class="recipeDetail__prepTime-content">
              <span class="recipeDetail__prepTime-label">Prep Time</span>
              <span class="recipeDetail__prepTime-val">
                {{ recipe.preptime || "15 Minutes" }}
              </span>
            </div>
          </div>

          <div class="recipeDetail__headline-infoTime">
            <div class="recipeDetail__infoTime-content">
              <span class="recipeDetail__infoTime-label">Cook Time</span>
              <span class="recipeDetail__infoTime-val">
                {{ recipe.time || "30 Minutes" }}
              </span>
            </div>
          </div>

          <div class="recipeDetail__headline-infoCategory">
            <span>{{ recipe.category || "Chicken" }}</span>
          </div>
        </div>
      </div>

      <RecipeDetailActions
        :share-url="shareUrl"
        :show-popup="showSharePopup"
        @toggleShare="toggleSharePopup"
        @print="printPage"
      />
    </div>
  </div>
</template>
