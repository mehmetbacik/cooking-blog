<script setup>
import RecipeDetailSharePopup from "./RecipeDetailSharePopup.vue";

defineProps({
  shareUrl: String,
  showPopup: Boolean,
});
defineEmits(["toggleShare", "print"]);
</script>

<template>
  <div class="recipeDetail__actions">
    <div class="recipeDetail__actions-printWrapper">
      <button class="recipeDetail__actions-printBtn" @click="$emit('print')">
        <img src="/icons/print.svg" alt="Print Icon" />
      </button>
      <span>Print</span>
    </div>

    <div class="recipeDetail__actions-shareWrapper">
      <button
        class="recipeDetail__actions-shareBtn"
        @click.stop="$emit('toggleShare')"
      >
        <img src="/icons/share.svg" alt="Share Icon" />
      </button>
      <span>Share</span>

      <RecipeDetailSharePopup v-if="showPopup" :share-url="shareUrl" />
    </div>
  </div>
</template>
