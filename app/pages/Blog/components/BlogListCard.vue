<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    author: string;
    photo: string;
    date: string;
  };
}>();
</script>

<template>
  <article class="blog-entry">
    <div class="entry-image">
      <img :src="post.image" :alt="post.title" loading="lazy" />
    </div>

    <div class="entry-content">
      <NuxtLink :to="`/blog/${post.slug}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>

      <p>{{ post.excerpt }}</p>

      <div class="entry-meta">
        <span>{{ post.date }}</span>
      </div>

      <div class="author">
        <img :src="post.photo" :alt="post.author" />
        <span>{{ post.author }}</span>
      </div>
    </div>
  </article>
</template>
