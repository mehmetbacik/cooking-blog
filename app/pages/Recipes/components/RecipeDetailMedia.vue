<script setup>
defineProps({
  recipe: Object,
  isPlaying: Boolean,
});
defineEmits(["play"]);
</script>

<template>
  <div class="recipeDetail__imageWrapper">
    <div
      v-if="isPlaying && recipe.videoUrl"
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

    <div v-else class="recipeDetail__imageContainer">
      <img
        :src="recipe.image"
        :alt="recipe.title"
        class="recipeDetail__image"
      />

      <button
        v-if="recipe.videoUrl"
        class="recipeDetail__playBtn"
        @click="$emit('play')"
      >
        <img src="/icons/playImage.svg" alt="Play" />
      </button>
    </div>
  </div>
</template>
