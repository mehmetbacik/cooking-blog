<script setup lang="ts">
import { useBlogShare } from "@/composables/useBlogShare";

const fbIcon = "/icons/facebook.svg";
const twIcon = "/icons/twitter.svg";
const inIcon = "/icons/instagram.svg";

const {
  shareFacebook,
  shareTwitter,
  shareInstagram,
} = useBlogShare();
</script>

<template>
  <div class="blogDetail__shareLayout">
    <span>Share This On:</span>

    <div class="blogDetail__shareIcon">
      <button
        class="blog-share__btn blog-share__btn--facebook"
        @click="shareFacebook"
        aria-label="Share on Facebook"
      >
        <img :src="fbIcon" alt="Facebook Icon" />
      </button>

      <button
        class="blog-share__btn blog-share__btn--twitter"
        @click="shareTwitter"
        aria-label="Share on Twitter"
      >
        <img :src="twIcon" alt="Twitter Icon" />
      </button>

      <button
        class="blog-share__btn blog-share__btn--instagram"
        @click="shareInstagram"
        aria-label="Share on Instagram"
      >
        <img :src="inIcon" alt="Instagram Icon" />
      </button>
    </div>
  </div>
</template>
