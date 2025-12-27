<script setup lang="ts">
import type { InstagramPost } from "../../../types";

defineProps<{
  post: InstagramPost;
}>();
</script>

<template>
  <NuxtLink
    :to="post.link"
    target="_blank"
    rel="noopener noreferrer"
    class="homeInstagram__item"
  >
    <img :src="post.image" :alt="post.alt" />
  </NuxtLink>
</template>
