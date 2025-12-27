<script setup lang="ts">
import { instagramPosts } from "../../../data/instagramPostsData";
import InstagramPostItem from "./InstagramPostItem.vue";
</script>

<template>
  <div class="homeInstagram__posts">
    <InstagramPostItem
      v-for="post in instagramPosts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>
