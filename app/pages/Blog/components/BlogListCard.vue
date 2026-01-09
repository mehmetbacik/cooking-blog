<script setup lang="ts">
import type { BlogPost } from "../../../types";

defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <article class="blog-entry">
    <div class="entry-image">
      <img :src="post.image" :alt="post.title" loading="lazy" />
    </div>
    <div class="entry-content">
      <NuxtLink :to="`/blog/${post.slug}`" class="title-link">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p>{{ post.excerpt }}</p>

      <div class="entry-meta">
        <span>{{ post.date }}</span>
      </div>

      <div class="author-info">
        <span class="author-photo">
          <img :src="post.photo" :alt="post.author" />
        </span>
        <span class="author">{{ post.author }}</span>
      </div>
    </div>
  </article>
</template>
