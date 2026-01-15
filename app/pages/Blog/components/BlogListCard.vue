<script setup lang="ts">
import type { BlogPost } from "../../../types";

defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <article class="blogList__item">
    <div class="blogList__item-image">
      <img :src="post.image" :alt="post.title" loading="lazy" />
    </div>
    <div class="blogList__item-content">
      <NuxtLink :to="`/blog/${post.slug}`">
        <h2 class="blogList__item-title">{{ post.title }}</h2>
      </NuxtLink>
      <p class="blogList__item-excerpt">{{ post.excerpt }}</p>
      <div class="blogList__item-meta">
        <div class="blogList__item-authorInfo">
          <div class="blogList__item-authorPhoto">
            <img :src="post.photo" :alt="post.author" />
          </div>
          <span class="blogList__item-author">{{ post.author }}</span>
        </div>
        <div class="blogList__item-date">
          <span>{{ post.date }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
