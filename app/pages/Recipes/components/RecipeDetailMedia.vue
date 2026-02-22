<script setup lang="ts">
import { ref } from "vue";
defineProps<{ image: string; videoUrl?: string; alt: string }>();
const isPlaying = ref(false);
</script>

<template>
  <div class="recipeDetail__imageWrapper">
    <div v-if="isPlaying && videoUrl" class="recipeDetail__videoContainer">
      <iframe
        :src="`https://www.youtube.com/embed/${videoUrl}?autoplay=1`"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="recipeDetail__videoIframe"
      ></iframe>
    </div>
    <div class="recipeDetail__imageContainer" v-else>
      <img :src="image" :alt="alt" class="recipeDetail__image" />
      <button
        v-if="videoUrl"
        class="recipeDetail__playBtn"
        @click="isPlaying = true"
      >
        <img src="/icons/playImage.svg" alt="Play" />
      </button>
    </div>
  </div>
</template>
