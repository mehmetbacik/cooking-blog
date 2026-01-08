<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { blogData } from "../../data/blogData";
const route = useRoute();
const post = blogData.find((p) => p.slug === route.params.slug);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
}
</script>

<template>
  <article class="container post-wrapper">
    <div class="post-header">
      <NuxtLink to="/blog" class="back-link">← Back to Blog</NuxtLink>
      <h1>{{ post.title }}</h1>
      <div class="meta">
        Written by <strong>{{ post.author }}</strong> on {{ post.date }}
      </div>
    </div>

    <div class="featured-image">
      <img :src="post.image" :alt="post.title" />
    </div>

    <div class="post-content" v-html="post.content"></div>
  </article>
</template>